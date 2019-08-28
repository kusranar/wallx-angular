import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account/account.service';
import { Account } from 'src/app/Models/account';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { transaction } from 'src/app/Models/transaction';
import { trader } from 'src/app/Models/trader';
import { TraderService } from 'src/app/services/trader/trader.service';
import { Customer } from 'src/app/Models/customer';

@Component({
  selector: 'app-topup-accto-trader',
  templateUrl: './topup-accto-trader.component.html',
  styleUrls: ['./topup-accto-trader.component.css']
})
export class TopupAcctoTraderComponent implements OnInit {

  constructor(private servTrader: TraderService, private servAcc: AccountService, private servTrans: TransactionService, private router: Router, private builder: FormBuilder) { }

  topupTraderGroup: FormGroup;
  accounts: Account[];

  ngOnInit() {
    this.listAcc();
    this.topupTraderGroup = this.builder.group({
      accountNumber: ['', Validators.required],
      amount: ['', Validators.required]
    })
  }

  exaccount: Account[] = [];

  @Output()
  cobaUpdate = new EventEmitter;


  cif = localStorage.getItem("id");
  listAcc() {
    this.servAcc.listAcc(this.cif).subscribe(
      data => {
        this.accounts = data["data"];
      }
    )
  }

  trader: trader = new trader('', '', '', '', '');
  getTraderByCif() {
    this.servTrader.getTraderByCif(this.cif).subscribe(
      data => {
        this.trader = data.data;
      }
    )
  }


  bool2: Boolean;
  idt = localStorage.getItem("idt");
  respCode: string;
  topupAccTrader() {
    this.bool2 = this.isNumeric(this.topupTraderGroup.controls['amount'].value);
    if (!this.bool2) {
      alert('Please input correct amount');
    } else {
      if (this.idt == "") {
        alert("Please register trader first")
      } else if (this.idt == undefined) {
        alert("Please open trader form page first");
      } else {
        this.servTrans.topupToTrader(
          new transaction(
            "",
            this.topupTraderGroup.controls['accountNumber'].value,
            this.trader.idTrader,
            new Date(),
            "TopUpToTrader",
            this.topupTraderGroup.controls['amount'].value,
            {
              idTransactionType: 3
            },
            {
              idBank: 666
            }
          )
        ).subscribe(
          data => {
            if (data.code == "01") {
              alert("Topup Succeess!");
              this.servAcc.listAcc(localStorage.getItem('id')).subscribe((data) => {
                this.exaccount = data;
                this.cobaUpdate.emit(this.exaccount);
              });
            } else {
              alert("Failed!");
            }
          }
        )
      }
    }
  }
  
  isNumeric(yourString) {
    return !isNaN(yourString)
  }

} 
