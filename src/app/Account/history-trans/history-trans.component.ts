import { Component, OnInit } from '@angular/core';
import { transaction } from 'src/app/Models/transaction';
import { AccountService } from 'src/app/services/account/account.service';

@Component({
  selector: 'app-history-trans',
  templateUrl: './history-trans.component.html',
  styleUrls: ['./history-trans.component.css']
})
export class HistoryTransComponent implements OnInit {

  transs : transaction[];
  constructor(private servAcc : AccountService) { }
 
  ngOnInit() {
  }

 
}
