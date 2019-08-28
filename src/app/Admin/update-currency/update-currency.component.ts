import { Component, OnInit, OnChanges } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency/currency.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { currency } from 'src/app/Models/currency';

@Component({
  selector: 'app-update-currency',
  templateUrl: './update-currency.component.html',
  styleUrls: ['./update-currency.component.css']
})
export class UpdateCurrencyComponent implements OnInit {



  constructor(private servCurrency: CurrencyService, private router: Router, private builder: FormBuilder) { }
  updateCurrencyGroup: FormGroup;


  ngOnInit() {
    this.listCcy();
    this.updateCurrencyGroup = this.builder.group({
      Description: ['', Validators.required],
      ccyBase: ['', Validators.required],
      ccyDestination: ['', Validators.required],
      buy: ['', Validators.required],
      sell: ['', Validators.required]
    })
  }

  bool6: Boolean;
  bool5: Boolean;
  updateCcy() {
    this.bool5 = this.isNumeric(this.updateCurrencyGroup.controls['buy'].value);
    this.bool6 = this.isNumeric(this.updateCurrencyGroup.controls['sell'].value);
    if (!this.bool5 || !this.bool6 ) {
      alert('Please input correct amount');
    } else {
      this.servCurrency.postCurrency(
        new currency(
          "",
          this.updateCurrencyGroup.controls['Description'].value,
          this.updateCurrencyGroup.controls['ccyBase'].value,
          this.updateCurrencyGroup.controls['ccyDestination'].value,
          new Date(),
          this.updateCurrencyGroup.controls['buy'].value,
          this.updateCurrencyGroup.controls['sell'].value
        )
      ).subscribe(
        data => {
          if (data.code == "01") {
            alert("Create Succeess!");
            this.listCcy();
          } else {
            alert("Failed!");
          }
        }
      )
    }
  }

  des = "USD";
  pages: Array<number>;
  cur: currency[];
  listCcy() {
    this.servCurrency.getCurrencyList(this.des).subscribe(
      data => {
        this.cur = data.data;
        this.pages = new Array(data.data['totalPages'])
      }
    )
  }

  isNumeric(yourString) {
    return !isNaN(yourString)
  }
}
