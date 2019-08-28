import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { transaction } from 'src/app/Models/transaction';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { Account } from 'src/app/Models/account';

@Component({
  selector: 'app-trans-to-acc',
  templateUrl: './trans-to-acc.component.html',
  styleUrls: ['./trans-to-acc.component.css']
})
export class TransToAccComponent implements OnInit {

  transToAccGroup: FormGroup;
  constructor(private servTrans: TransactionService, private builder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.transToAccGroup = this.builder.group({
      accountNumber: ['', Validators.required],
      amount: ['', Validators.required]
    })
  }

  @Output()
  output = new EventEmitter;
  extransaction: transaction;

  @Input()
  account: Account;

  bool4: Boolean;
  idt = localStorage.getItem('idt');
  code: string;
  data1: transaction;
  transferTradeToAcc() {
    this.bool4 = this.isNumeric(this.transToAccGroup.controls['amount'].value);
    if (!this.bool4) {
      alert('Please input correct amount');
    } else {
      this.servTrans.transFromTrader(
        new transaction(
          "",
          this.idt,
          this.transToAccGroup.controls['accountNumber'].value,
          new Date(),
          "TransferToAcc",
          this.transToAccGroup.controls['amount'].value,
          {
            idTransactionType: 4
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
    return !isNaN(yourString)
  }

}
