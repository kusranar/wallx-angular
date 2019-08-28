import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/Models/account';
import { statusType } from 'src/app/Models/statusType';
 
@Component({
  selector: 'app-regis-acc',
  templateUrl: './regis-acc.component.html',
  styleUrls: ['./regis-acc.component.css']
}) 
export class RegisAccComponent implements OnInit {

  constructor(private servAcc: AccountService, private router: Router, private builder: FormBuilder) { }
  regisAccGroup: FormGroup;

  CIF = localStorage.getItem('id');
  account1: Account; 

  ngOnInit() { 
    this.regisAccGroup = this.builder.group({
      cashtag: ['', Validators.required]
    })
  }

  exaccount:Account[]=[];
  
  @Input()
  account: Account;

  @Output()
  cobaUpdate = new EventEmitter;
  
  regis(){
    this.servAcc.regisAcc( 
      new Account(
        "",
        this.regisAccGroup.controls['cashtag'].value, 
        new Date(), 
        {
          idStatusType: 1
        },
        {
          cif: this.CIF
        },
        ""
      )
    ).subscribe(
      data => {
        if (data.code == "01") {
          alert("Create Succeess!");
          this.servAcc.listAcc(localStorage.getItem('id')).subscribe((data)=>{
            this.exaccount=data;
            this.cobaUpdate.emit(this.exaccount); });
        }else{
          alert("Failed!");
        }
      } 
    )
  }
}
