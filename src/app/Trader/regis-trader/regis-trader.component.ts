import { Component, OnInit } from '@angular/core';
import { TraderService } from 'src/app/services/trader/trader.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trader } from 'src/app/Models/trader';

@Component({
  selector: 'app-regis-trader',
  templateUrl: './regis-trader.component.html',
  styleUrls: ['./regis-trader.component.css']
})
export class RegisTraderComponent implements OnInit {

  constructor(private servTrad: TraderService, private router: Router, private builder: FormBuilder) { }

  regisTradGroup: FormGroup;

  cif = localStorage.getItem('id');
  ngOnInit() {
    this.regisTradGroup = this.builder.group({
      nameTrader: ['', Validators.required]
    })
  }

  respCode: string;
  regis() {
    this.servTrad.regisTrader(
      new trader(
        "",
        this.regisTradGroup.controls['nameTrader'].value,
        {
          cif: this.cif
        },
        "",
        ""
      )
    ).subscribe(
      data => { 
        if (data.code == "01") {
          alert("Create Succeess!");
          localStorage.setItem("idt", data.data.idTrader);
          this.router.navigate["trader/home"];
        } else {
          alert("Failed!");
        }
      }
    )
  }
}
