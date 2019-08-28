import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { Account } from 'src/app/Models/account';
import { transaction } from 'src/app/Models/transaction';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home', 
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})  
export class HomeComponent implements OnInit {
  accounts : Account[];
  constructor(private servAcc : AccountService) { } 

  cif = localStorage.getItem('id');
  
  ngOnInit() { 
    this.list(); 
  } 
  account : Account;
  
  getDataAcc(list){
    this.account = list;
    this.listTransByAcc(list);
  } 
 
  list(){
    this.servAcc.listAcc(this.cif).subscribe(
      data => { 
        this.accounts = data["data"];
      }
    )
  }

    transs : transaction[];

    listTransByAcc(list){
    this.servAcc.getTransByAccNumb(list.accountNumber).subscribe(
      data => {
        this.transs = data["data"];
      }
    )
  }
  
  asd2 ;
  fungsiOutput(asd){
    this.asd2 = asd;
    this.list();
  }

} 
