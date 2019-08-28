import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/Models/account';

@Component({
  selector: 'app-update-acc',  
  templateUrl: './update-acc.component.html',
  styleUrls: ['./update-acc.component.css'] 
})
export class UpdateAccComponent implements OnInit {

  constructor(private servAcc: AccountService, private router: Router, private builder: FormBuilder) { }
  updateAccGroup: FormGroup;
  CIF = localStorage.getItem('id');

  ngOnInit() {
    this.updateAccGroup = this.builder.group({
      cashtag: ['', Validators.required]
    })
  }
 
  exaccount:Account[]=[];

  @Input()
  account: Account;

  @Output()
  cobaUpdate = new EventEmitter;
  
  update() {
    this.servAcc.putAcc(
      new Account(
        this.account.accountNumber,
        this.updateAccGroup.controls['cashtag'].value,
        this.account.openDate,
        this.account.idStatusType,
        this.account.customer,
        this.account.balance
      )
    ).subscribe( 
      data => {
        if (data.code == "01") {
          alert("Update Success");
          this.servAcc.listAcc(localStorage.getItem('id')).subscribe((data)=>{
            this.exaccount=data["data"];
            this.cobaUpdate.emit(this.exaccount);   
          });
        } else {
          alert("Failed!");
        }
      }
    );   
  }
}
