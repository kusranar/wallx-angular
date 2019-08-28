import { Component, OnInit,AfterViewChecked, AfterContentChecked } from '@angular/core';
import { getLocalRefs } from '@angular/core/src/render3/discovery_utils';
import { CurrencyService } from '../app/services/currency/currency.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterContentChecked,AfterViewChecked {
  constructor(private weather : CurrencyService){ }

  ngOnInit() {
    this.getlocal();
    this.getlocalBe();
  }

  title = 'WALLX';

  id : string;
  getlocal(){
    this.id = localStorage.getItem("id");
  }

  idBe : string;
  getlocalBe(){
    this.idBe = localStorage.getItem("idBe"); 
  }

  lgn : boolean=false;
  lgnBe : boolean = false;
  ngAfterContentChecked(): void {
    this.lgn = !!localStorage.getItem('id');
    this.lgnBe = !!localStorage.getItem('idBe');
  }
  

  ngAfterViewChecked(): void {
    this.lgn = !!localStorage.getItem('id');
    this.lgnBe = !!localStorage.getItem('idBe');
  }
 
} 
