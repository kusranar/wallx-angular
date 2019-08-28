import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { CustomerService } from '../services/customer/customer.service';
import { Customer } from '../Models/customer';

@Component({
  selector: 'app-default-side-bar',
  templateUrl: './default-side-bar.component.html',
  styleUrls: ['./default-side-bar.component.css']
})

export class DefaultSideBarComponent implements OnInit {

  constructor(private servCust : CustomerService,private router : Router, private builder : FormBuilder) { }

  ngOnInit() {
    this.list(this.cif);
  }
  @Output()
  refreshSidebar = new EventEmitter;
  togle : boolean;   

  show(){
    this.togle = !this.togle;
  }
  
  cif = localStorage.getItem('id');
  customer1 : Customer; 
  list(cif){
    this.servCust.getCustomerByCif(this.cif).subscribe(
      data => { 
        this.customer1 = data.data;
      }
    )
  }

  idTrader;
  recif :any; 
  logout() {
    this.recif = localStorage.removeItem("id");
    this.idTrader = localStorage.removeItem("idt");
    this.router.navigate(['/login']);
  }
}
