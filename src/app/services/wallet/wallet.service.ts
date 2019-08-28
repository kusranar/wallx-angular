import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from 'src/app/Models/account';
import { Observable, throwError, pipe } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { CommonRespons } from 'src/app/Models/commonResponse';
import { WalletType } from 'src/app/Models/walletType';
import { Constants } from '../constants';
import { walletAccount } from 'src/app/Models/walletAccount';
import { wallet } from 'src/app/Models/wallet';

@Injectable({
  providedIn: 'root' 
})
export class WalletService {

  urlAccount = 'account';
  urlCustomer = 'customer';
  urlWalletAccount = 'walletaccount';
  urlWalletType = 'walletType';

  constructor(private http: HttpClient) { } 

  getListWalletType() : Observable<WalletType>{
    return this.http.get<WalletType>(`${Constants.API_BASE_URL}/walletType/walletTypes`);
  }

  getWallAccById(accountNumber : string): Observable<CommonRespons<wallet>>{
    return this.http.get<CommonRespons<wallet>>(`${Constants.API_BASE_URL}/${this.urlAccount}/walletaccount/`+ accountNumber);
  }

  regisWall(regWall : wallet): Observable<CommonRespons<wallet>>{
    return this.http.post<CommonRespons<wallet>>(`${Constants.API_BASE_URL}/${this.urlAccount}/${this.urlWalletAccount}`,regWall);
  }

  listWall(cif : string):Observable<CommonRespons<wallet[]>>{
    return this.http.get<CommonRespons<wallet[]>>(`${Constants.API_BASE_URL}/${this.urlAccount}/walletaccounts/`+ cif)
  } 

  putWall(putwall : wallet):Observable<CommonRespons<wallet>> {
    return this.http.put<CommonRespons<wallet>>(`${Constants.API_BASE_URL}/${this.urlAccount}/${this.urlWalletAccount}`,putwall)
  } 

  addWallet(addWall : WalletType):Observable<CommonRespons<WalletType>>{
    return this.http.post<CommonRespons<WalletType>>(`${Constants.API_BASE_URL}/${this.urlWalletType}`,addWall);
  }
}
