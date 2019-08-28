import { Component, OnInit, Input } from '@angular/core';
import { ForexService } from 'src/app/services/forex/forex.service';
import { TransactionForex } from 'src/app/Models/transactionForex';
import { CurrencyService } from 'src/app/services/currency/currency.service';
import { currency } from 'src/app/Models/currency';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TraderService } from 'src/app/services/trader/trader.service';
import { trader } from 'src/app/Models/trader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-forex',
  templateUrl: './home-forex.component.html',
  styleUrls: ['./home-forex.component.css']
})
export class HomeForexComponent implements OnInit {

  constructor(private forexService: ForexService, private router: Router, private currencyService: CurrencyService, private builder: FormBuilder, private traderSerivce: TraderService) { }

  buy: FormGroup;
  sell: FormGroup;

  id = localStorage.getItem("id");
  ngOnInit() {
    this.getIdTrader();
    this.getCurrencies();
    this.buy = this.builder.group({
      forexBuy: ['', Validators.required]
    })
    this.sell = this.builder.group({
      forexSell: ['', Validators.required]
    })
  }

  idt = localStorage.getItem("idt");
  traderr: trader;
  getIdTrader() {
    this.traderSerivce.getTraderByCif(this.id).subscribe(
      data => {
        this.respCode = data.code;
        if (data.code == '01') {
          this.traderr = data.data;
          localStorage.setItem("idt", this.traderr.idTrader);
          this.getTrades();
        } else {
          localStorage.setItem("idt", "");
        }
      }
    )
  }
  transForex: TransactionForex[];
  getTrades() {
    this.idt = localStorage.getItem("idt");
    this.forexService.getTransFList(this.idt).subscribe(
      data => {
        this.transForex = data.data;
      }
    )
  }

  des = "USD";
  cur: currency[];
  getCurrencies() {
    this.currencyService.getCurrencyList(this.des).subscribe(
      data => {
        this.cur = data.data;
      }
    )
  }

  bool5: Boolean;
  rate;
  respCode;
  postBuy() {
    this.bool5 = this.isNumeric(this.buy.controls['forexBuy'].value);
    if (!this.bool5) {
      alert('Please input correct amount');
    } else {
      this.idt = localStorage.getItem("idt");
      this.forexService.buy(
        new TransactionForex(
          "",
          "Buy",
          new Date,
          0,
          0,
          this.buy.controls["forexBuy"].value,
          this.rate,
          this.buy.controls["forexBuy"].value,
          {
            idTrader: this.idt
          },
          {
            idCurrency: 1
          }
        )
      ).subscribe(
        data => {
          this.respCode = data.code;
          if (this.respCode == '01') {
            alert('Buy Success')
            this.getTrades();
          } else {
            alert('Buy Failed')
          }
        }
      )
    }
  }

  postSell() {
    this.bool5 = this.isNumeric(this.sell.controls['forexSell'].value);
    if (!this.bool5) {
      alert('Please input correct amount');
    } else {
    this.idt = localStorage.getItem("idt");
    this.forexService.sell(
      new TransactionForex(
        "",
        "Sell",
        new Date,
        0,
        0,
        this.sell.controls["forexSell"].value,
        this.rate,
        this.sell.controls["forexSell"].value,
        {
          idTrader: this.idt
        },
        {
          idCurrency: 1
        }
      )
    ).subscribe(
      data => {
        this.respCode = data.code;
        if (this.respCode == '01') {
          alert('Sell Success')
          this.getTrades();
        } else if (this.respCode == '22') {
          alert('Your AAS(Amount After Sell) is not enough')
        } else {
          alert('Sell Failed')
        }
      }
    )
  }
}

  isNumeric(yourString) {
    return !isNaN(yourString)
  }
}
