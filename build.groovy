pipeline{
  environment {
    registry = "mofino/wallxfea"
    registryCredential = 'dockerhub'
    dockerImage = ''
    containerName='wallxfea'
    deployServer='104.248.147.193'
    deployServerUser='root'
    deployPath='/apps/wallxfea'
  }
  agent any
  stages {
    stage('Checkout Source') {
      steps{
        script {
          checkout scm: [$class: 'GitSCM', userRemoteConfigs: [[credentialsId: 'gitlab',url: env.gitlabSourceRepoHttpUrl]], branches: [[name: env.gitlabSourceBranch]]], poll: false
        }
      }
    }
    stage('Build Image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Tag & Push Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
            dockerImage.push('latest')
          }
        }
      }
    }
    stage('Remove Unused Docker Image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
    stage('Deploy and Run App') {
      steps{
        sshagent(credentials : ['543699f1-e549-4e48-b3db-7ab4456ee495']) {
            sh 'ssh -o StrictHostKeyChecking=no $deployServerUser@$deployServer "docker stop $containerName || true  && docker container rm $containerName || true"'
            sh 'ssh -o StrictHostKeyChecking=no $deployServerUser@$deployServer "docker pull $registry || true"'
            sh 'ssh -o StrictHostKeyChecking=no $deployServerUser@$deployServer "mkdir -p $deployPath"'
            sh 'scp -o StrictHostKeyChecking=no deploy/dev.env $deployServerUser@$deployServer:$deployPath/app.env'
            sh 'ssh -o StrictHostKeyChecking=no $deployServerUser@$deployServer "cd $deployPath && docker run -p 3333:3333 -d --env-file=app.env --name=$containerName $registry"'
        }
      }
    }
  }
}