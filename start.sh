#!/bin/bash
#

STARTTIME=$(date)
echo " Start $STARTTIME "
echo "-------------------------------------------------------------------"

catchError(){
  echo "Found Error at line $1... Exiting"
  exit 1
}

trap 'catchError $LINENO' ERR

varkeys=($ENV_JS_VARS)
for j in "${!varkeys[@]}"
do
 itemValue=${varkeys[$j]}
 echo "replacing   ${varkeys[$j]} with ${!itemValue}"
 sed -i "s/#${varkeys[$j]}#/${!itemValue}/g" /apps/nginx/nginx_root/main.*js
 echo "replaced   ${varkeys[$j]} with ${!itemValue}"
done

ngkeys=($NGINX_VARS)
for j in "${!ngkeys[@]}"
do
 itemValue=${ngkeys[$j]}
echo "replacing NGINX CONF: ${ngkeys[$j]} with ${!itemValue}"
sed -i "s/#${ngkeys[$j]}#/${!itemValue}/g" /etc/nginx/conf.d/default.conf
echo "replaced NGINX CONF: ${ngkeys[$j]} with ${!itemValue}"
done

echo " "
ENDTIME=$(date)
echo " End $ENDTIME"
echo "------------------------------------------------------------------"

# Run nginx
nginx -g 'daemon off;'