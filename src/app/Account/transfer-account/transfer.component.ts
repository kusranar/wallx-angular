import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account/account.service';
import { Account } from 'src/app/Models/account';
import { transaction } from 'src/app/Models/transaction';
import { trader } from 'src/app/Models/trader';
import { CheckType } from '@angular/core/src/view';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  constructor(private servTrans: TransactionService, private servAcc: AccountService, private router: Router, private builder: FormBuilder) { }
  transferGroup: FormGroup;
  accounts: Account[];

  cif = localStorage.getItem('id');

  ngOnInit() {
    this.listAcc();
    this.transferGroup = this.builder.group({
      accountNumber: ['', Validators.required],
      received: ['', Validators.required],
      amount: ['', Validators.required]
    })

  }
  extransaction: transaction;


  @Output()
  output = new EventEmitter;

  @Input()
  account: Account;

  list

  listAcc() {
    this.servAcc.listAcc(this.cif).subscribe(
      data => {
        this.accounts = data["data"];
      }
    )
  }

  @Input()
  accountNumber2 = ''
  receivedAccount = ''
  amount = ''


  getAccount() {
    this.servAcc.getAccountById(this.receivedAccount).subscribe(
      data => {
        this.account = data.data;
      }
    )
  }

  bool: Boolean;
  code: string;
  data1: transaction;
  transferTrans() {
    this.bool = this.isNumeric(this.transferGroup.controls['amount'].value);
    if (!this.bool) {
      alert('Please input correct amount');
    } else {
      this.servTrans.transfer(
        new transaction(
          "",
          this.transferGroup.controls['accountNumber'].value,
          this.transferGroup.controls['received'].value,
          new Date(),
          "Transfer",
          this.transferGroup.controls['amount'].value,
          {
            idTransactionType: 2
          },
          {
            idBank: 666
          }
        )
      ).subscribe(
        data => {
          if (data.code == "01") {
            alert("Transfer Success");
            this.extransaction = data.data;
            this.output.emit(this.extransaction);
          } else {
            alert("Failed");
          }
        }
      )
    }
  }

  isNumeric(yourString) {
    return !isNaN(yourString);
  }
}
