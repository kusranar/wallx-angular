import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { transaction } from 'src/app/Models/transaction';
import { Observable } from 'rxjs';
import { Constants } from '../constants';
import { CommonRespons } from 'src/app/Models/commonResponse';
import { wallet } from 'src/app/Models/wallet';
import { Account } from 'src/app/Models/account';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  urlTransaction = 'transaction';
  urlCustomer = 'customer';
  urlBackOffice = 'backoffice';
  urlAccount = 'account';
 
  constructor(private http : HttpClient) { } 

  transfer(tf: transaction): Observable<CommonRespons<transaction>>{ 
    return this.http.post<CommonRespons<transaction>>(`${Constants.API_BASE_URL}/${this.urlCustomer}/${this.urlTransaction}`, tf);
  }
 
  Topup(topup: transaction): Observable<CommonRespons<transaction>>{
    return this.http.post<CommonRespons<transaction>>(`${Constants.API_BASE_URL}/${this.urlCustomer}/${this.urlTransaction}`, topup);
  }
  
  topupToTrader(topupTrader : transaction):Observable<CommonRespons<transaction>>{
    return this.http.post<CommonRespons<transaction>>(`${Constants.API_BASE_URL}/${this.urlCustomer}/${this.urlTransaction}`,topupTrader);
  }  

  transFromTrader(tfToacc : transaction):Observable<CommonRespons<transaction>>{
    return this.http.post<CommonRespons<transaction>>(`${Constants.API_BASE_URL}/${this.urlCustomer}/${this.urlTransaction}`,tfToacc)
  }
  
  BoToAccount(topupAcc : transaction):Observable<CommonRespons<transaction>>{
    return this.http.post<CommonRespons<transaction>>(`${Constants.API_BASE_URL}/${this.urlCustomer}/${this.urlTransaction}`,topupAcc);
  }  
}  
