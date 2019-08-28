import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/Models/customer';
import { User } from 'src/app/Models/user';
import { UserServiceService } from '../services/user/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private servCustomer: CustomerService, private servUser: UserServiceService, private router: Router, private builder: FormBuilder) { }
  registerGroup: FormGroup;

  registerDate = new Date();

  inValid1 : Boolean;
  inValid2 : Boolean;
  valid1 : Boolean;
  valid2 : Boolean;

  ngOnInit() { 
    this.registerGroup = this.builder.group({
      idCard: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      birthDate: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      mother: ['', Validators.required],
      occupation: ['', Validators.required],
      salary: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  create() {
    this.servUser.postUser(
      new User(
        "2",
        this.registerGroup.controls['username'].value,
        this.registerGroup.controls['password'].value,
        {
          idRoleType: "1"
        }, 
        this.registerDate
      )
    ).subscribe(
      dataUser => {
        if (dataUser.code == '01') {
          this.servCustomer.postCustomer(
            new Customer(
              '',
              this.registerGroup.controls['idCard'].value,
              this.registerGroup.controls['firstName'].value,
              this.registerGroup.controls['lastName'].value,
              this.registerGroup.controls['birthDate'].value,
              this.registerGroup.controls['gender'].value,
              this.registerGroup.controls['address'].value,
              this.registerGroup.controls['phone'].value,
              this.registerGroup.controls['email'].value,
              this.registerGroup.controls['mother'].value,
              this.registerGroup.controls['occupation'].value,
              this.registerGroup.controls['salary'].value,
              {
                idUser: dataUser.data.idUser
              },
              {
                idImage: "1"
              }
            )
          ).subscribe(
            dataCustomer => {
              console.log(dataCustomer);
            }, error => console.log(error)
          )
        }
      }, error => console.log(error)
    )
  }

  idBoolean: Boolean = false;
  usernameBoolen : Boolean = false; 

  onSubmit() {
    if (this.idBoolean == true && this.usernameBoolen== true) {
      this.create();
      this.router.navigate([`/login`]); 
      alert("Create Success!") 
    }else(
      alert("ID CARD & USERNAME INVALID")
    )
  }

  respCode;
  
  check_id() {
    this.servCustomer.checkid(new Customer(
      "",this.registerGroup.controls['idCard'].value,"","","","","","","","","","",
      {
        idUser: ""
      },
      {
        idImage: ""
      })
    ).subscribe(
      result => {
        this.respCode = result["code"];
        if(this.respCode == '01'){
          this.idBoolean = true;
          this.valid1 = true;
          this.inValid1 = false;
        } else if (this.respCode == '33'){
          this.idBoolean = false;
          this.valid1 = false;
          this.inValid1 = true;
        } else {
          alert("Error!"); 
        }
      })
  }

  check_username() {
    this.servUser.checkusername(this.registerGroup.controls['username'].value
    ).subscribe(
      result => {
        this.respCode = result["code"];
        if(this.respCode == '01'){
          this.usernameBoolen = true;
          this.inValid2 = false;
          this.valid2 = true;
        } else if (this.respCode == '33'){
          this.usernameBoolen = false;
          this.valid2 = false;
          this.inValid2 = true;
        } else {
          alert("Error!"); 
        }
      })
  }

  back(){
    this.router.navigate["/login"];
  }
}
