import { Component, OnInit } from '@angular/core';
import { TraderService } from 'src/app/services/trader/trader.service';
import { trader } from 'src/app/Models/trader';
import { Outstanding } from 'src/app/Models/outstanding';

@Component({
  selector: 'app-home-trader',
  templateUrl: './home-trader.component.html',
  styleUrls: ['./home-trader.component.css']
})
export class HomeTraderComponent implements OnInit {

  constructor(private traderService: TraderService) { }

  ngOnInit() {
    this.getTrader();
    this.getIdTrader();
    this.getListTrader();
    this.getListOutstandingByidtrad();
    this.getListOutstandings();
  }
  idBe = localStorage.getItem('idBe');
  id = localStorage.getItem("id");
  trader1: trader = new trader(null, null, null, null, null);
  getTrader() {
    this.traderService.getTraderByCif(this.id).subscribe(
      data => {
        if (data.code === '01') {
          this.trader1 = data.data;
        }
      }
    )
  }

  respCode;
  idt = localStorage.getItem("idt");
  traderr: trader;
  getIdTrader() {
    this.traderService.getTraderByCif(this.id).subscribe(
      data => {
        this.respCode = data.code;
        if (data.code === '01') {
          this.traderr = data.data;
          localStorage.setItem("idt", this.traderr.idTrader);
        } else {
          localStorage.setItem("idt", "");
        }
      }
    )
  }
  traders : trader[];
  getListTrader(){
    this.traderService.getTraders().subscribe( 
      data=> {
        this.traders = data["data"]; 
      }
    )
  }

  closeForex() {
    this.traderService.postOutStanding(
      new Outstanding(
        1, 
        new Date, 
        1, 
      {
        idTrader :"1"
      }
      )
    ).subscribe(
      data => {
        if (data.code == "01") {
          alert("Create Succeess!");
        } else {
          alert("Failed!");
        }
      }
    )
  }
  
  outstandidt : Outstanding; 
  getListOutstandingByidtrad(){
    this.traderService.getListOutstandingidt(this.idt).subscribe(
      data=>{
        this.outstandidt = data.data;
      }
    )
  }

  outstand : Outstanding[]; 
  getListOutstandings(){
    this.traderService.getListOutstanding().subscribe(
      data=>{
        this.outstand = data.data;
      }
    )
  }
} 
