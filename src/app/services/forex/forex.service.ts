import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonRespons } from 'src/app/Models/commonResponse';
import { Constants } from '../constants';
import { TransactionForex } from 'src/app/Models/transactionForex';

@Injectable({
  providedIn: 'root'
})
export class ForexService {

  urlTransactionForex = 'transactionf';
  urlTrader = 'trader';
  urlBuy = 'buy';
  urlSell= 'sell';

  constructor(private http: HttpClient) { }

  getTransFList(idTrader : string) : Observable<CommonRespons<TransactionForex[]>> {
    return this.http.get<CommonRespons<TransactionForex[]>>(`${Constants.API_BASE_URL}/${this.urlTransactionForex}?idtrader=`+ idTrader)
  }

  buy(transactionForex : TransactionForex) : Observable<CommonRespons<TransactionForex>> {
    return this.http.post<CommonRespons<TransactionForex>>(`${Constants.API_BASE_URL}/${this.urlTransactionForex}/${this.urlTrader}/${this.urlBuy}`, transactionForex)
  }

  sell(transactionForex : TransactionForex) : Observable<CommonRespons<TransactionForex>> {
    return this.http.post<CommonRespons<TransactionForex>>(`${Constants.API_BASE_URL}/${this.urlTransactionForex}/${this.urlTrader}/${this.urlSell}`, transactionForex)
  }
}
