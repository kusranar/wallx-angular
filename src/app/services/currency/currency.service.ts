import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonRespons } from 'src/app/Models/commonResponse';
import { currency } from 'src/app/Models/currency';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
}) 
export class CurrencyService {


  urlCurrencies = 'currencies';
  urlCurrency = 'currency';
  constructor(private http: HttpClient) { }

  getCurrencyList(description:string) : Observable<CommonRespons<currency[]>>{
    return this.http.get<CommonRespons<currency[]>>(`${Constants.API_BASE_URL}/${this.urlCurrencies}?description=` + description)
  }

  postCurrency(ccy : currency):Observable<CommonRespons<currency>>{
    return this.http.post<CommonRespons<currency>>(`${Constants.API_BASE_URL}/${this.urlCurrency}`,ccy);
  }

  getRate(description:string):Observable<CommonRespons<currency>>{
    return this.http.get<CommonRespons<currency>>(`${Constants.API_BASE_URL}/${this.urlCurrency}?description=` + description);
  }
}
