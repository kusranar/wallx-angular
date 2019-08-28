import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user/user-service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { Customer } from 'src/app/Models/customer';
import { BackOffice } from 'src/app/Models/backOffice';
import { login } from '../Models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private servLogin : UserServiceService, private router : Router, private builder : FormBuilder) { }
  loginGroup : FormGroup;
  user : User;
  ngOnInit() {
    this.loginGroup= this.builder.group({
      username : ['',Validators.required],
      password : ['',Validators.required]  
    })
  }

  username : string;
  password :string;
  code : string;
  data1 : User;
  customer : Customer;
  backOffice : BackOffice;

  login(){
    this.servLogin.login(
      new login(
        this.loginGroup.controls['username'].value,
        this.loginGroup.controls['password'].value
      )
      ).subscribe(
      async (data) =>{
          this.code = data["code"];
          this.user = data["data"];
          if (this.code === "01") {
            if (this.user.idRoleType.idRoleType == '1') {
              let tempCustomer = await this.servLogin.getIdCustomer(this.user).toPromise();
              this.customer = tempCustomer["data"];
              localStorage.setItem("id", this.customer.cif);
              alert("Welcome Customer");
              this.router.navigate(['/cust/dash']);
            }else if (this.user.idRoleType.idRoleType == '2'){
              let tempBackOffice = await this.servLogin.getIdBackOffice(this.user).toPromise();
              this.backOffice = tempBackOffice['data']
              localStorage.setItem("idBe", this.backOffice.idBackoffice);
              alert("Welcome Admin");
              this.router.navigate(['/cust/dash']);
            } else{
              alert("role is unidentified");
            }
          }else if(this.code == "66"){ 
            alert("Username or password is invalid");
          }
      },
      error => console.log(error)
    )
    // this.user = new User();
  }

  onSubmit(){
    this.login();
  }
}
