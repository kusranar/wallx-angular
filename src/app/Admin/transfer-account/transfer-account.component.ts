import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account/account.service';
import { Account } from 'src/app/Models/account';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { transaction } from 'src/app/Models/transaction';

@Component({
  selector: 'app-transfer-account',
  templateUrl: './transfer-account.component.html',
  styleUrls: ['./transfer-account.component.css']
})
export class TransferAccountComponent implements OnInit {
  topUpAccGroup : FormGroup;
  constructor(private servTrans : TransactionService,private servAcc : AccountService,private router:Router, private builder : FormBuilder) { }

  ngOnInit() {
    this.listAccounts();
    
    this.topUpAccGroup = this.builder.group({
      accountNumber : ['', Validators.required],
      amount : ['', Validators.required]
    })
  }

  @Input()
  accountNumber = ''
  amount =''
  account : Account;
  getData(list){
    this.account = list;
    this.listTransByAcc(list);
  }

  transs : transaction[];
  listTransByAcc(list){
    this.servAcc.getTransByAccNumb(list.accountNumber).subscribe(
      data => {
        this.transs = data["data"];
      }
    )
  }

  transaction1: transaction;
  accounts : Account;
  listAccounts(){
    this.servAcc.getListAccounts().subscribe(
      data=> {
        this.accounts = data.data;
      }
    )
  }
  account1 : Account;
  getAccount(){
    this.servAcc.getAccountById(this.accountNumber).subscribe(
      data => { 
        this.account1 = data.data;
      }
    )
  }

 bool5: Boolean; 
  TopupAcc() {
    this.bool5 = this.isNumeric(this.topUpAccGroup.controls['amount'].value);
    if (!this.bool5) {
      alert('Please input correct amount');
    } else {
    this.servTrans.BoToAccount(
      new transaction(
        "",
        666 ,
       this.topUpAccGroup.controls['accountNumber'].value,
        new Date(),
        "Transfer",
        this.topUpAccGroup.controls['amount'].value,
        {
          idTransactionType: 5
        },
        {
          idBank: 666
        }
      ) 
    ).subscribe( 
      data => {
        if (data.code == "01") {
          alert("Update Success");
          this.transaction1 = data.data;
          this.listAccounts();
          } else {
          alert("Failed!");
        }
      }
    );   
  }
}

  isNumeric(yourString) {
    return !isNaN(yourString)
  }
}
