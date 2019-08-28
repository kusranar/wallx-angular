import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Account } from 'src/app/Models/account';
import { Observable, observable } from 'rxjs';
import { CommonRespons } from 'src/app/Models/commonResponse';
import { Constants } from '../constants';
import { transaction } from 'src/app/Models/transaction';
import { wallet } from 'src/app/Models/wallet';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  urlAccount = 'account';
  urlAccounts = 'accounts';
  urlwalletAccs ='walletaccounts';
  urlCustomer = 'customer'; 
  urlTrans = 'transaction'
  constructor(private http: HttpClient) { }
   
  regisAcc(regAcc : Account) : Observable<CommonRespons<Account>>{
    return this.http.post<CommonRespons<Account>>(`${Constants.API_BASE_URL}/${this.urlCustomer}/${this.urlAccount}`, regAcc);
  }
 
  listAcc(cif : string) : Observable<Account[]>{ 
    return this.http.get<Account[]>(`${Constants.API_BASE_URL}/${this.urlCustomer}/accounts/`+ cif);
  }

  putAcc(putAcc : Account):Observable<CommonRespons<Account>> {
    return this.http.put<CommonRespons<Account>>(`${Constants.API_BASE_URL}/${this.urlCustomer}/${this.urlAccount}`,putAcc)
  }

  getTransByAccNumb(accountNumber : transaction):Observable<transaction>{
    return this.http.get<transaction>(`${Constants.API_BASE_URL}/${this.urlCustomer}/${this.urlTrans}/`+accountNumber);
  }

  getListAccounts():Observable<CommonRespons<Account>>{
    return this.http.get<CommonRespons<Account>>(`${Constants.API_BASE_URL}/${this.urlAccounts}`);
  }

  getAccountById(accountNumber : string):Observable<CommonRespons<Account>>{
    return this.http.get<CommonRespons<Account>>(`${Constants.API_BASE_URL}/${this.urlCustomer}/${this.urlAccount}/`+accountNumber)
  }

  getWallByAcc(cif : string) : Observable<CommonRespons<wallet>>{
    return this.http.get<CommonRespons<wallet>>(`${Constants.API_BASE_URL}/${this.urlAccount}/${this.urlwalletAccs}/`+cif);
  }
}
