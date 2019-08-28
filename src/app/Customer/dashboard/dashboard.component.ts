import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CurrencyService } from 'src/app/services/currency/currency.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 

  dateNow = new Date();
  Chart : [];
  constructor(private weather : CurrencyService) { }
  togle: boolean;
  show() {
    this.togle = !this.togle; 
  }

  LineChart = [];

  ngOnInit() {
    let desc = "USD";
    this.weather.getCurrencyList(desc)
      .subscribe(res => {
        let temp_max = res['data'].map(res => res.buy) 
        let temp_min = res['data'].map(res => res.sell)
        let alldates = res['data'].map(res => res.date)

        let weatherDates = [];
        alldates.forEach((res) => {
          let jsdate = new Date()
          weatherDates.push(jsdate.toLocaleTimeString('en',{ year : 'numeric',month:'short',day: 'numeric'}))
        })
        this.Chart = new Chart('canvas',{
          type : 'line',
          data: {
            labels: weatherDates,
            datasets : [
              {
                data: temp_max,
                borderColor: '#3cba9f',
                label : 'BUY',
                fill: false
              },
              {
                data: temp_min,
                borderColor: '#ffcc00',
                label : 'SELL',
                fill: false
              }
            ]
          },
          options: {
            legend: {
              display : false
            },
            scales : {
              xAxes: [{
                display:true
              }],
              yAxes : [{
                display: true
              }]
            }
          }
        })
      })

  }

}
