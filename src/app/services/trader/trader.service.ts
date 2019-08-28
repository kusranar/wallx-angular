import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trader } from 'src/app/Models/trader';
import { Observable } from 'rxjs';
import { CommonRespons } from 'src/app/Models/commonResponse';
import { Constants } from '../constants';
import { Outstanding } from 'src/app/Models/outstanding';

@Injectable({
  providedIn: 'root'
})
export class TraderService {
 
  urlTrader = 'trader';
  urlTraders = 'traders';
  urlBackoffice = 'backoffice';
  urloutstanding = 'outstanding';
  urloutstandings = 'outstandings';
  constructor( private http : HttpClient) { }

  regisTrader(regTrad : trader): Observable<CommonRespons<trader>>{
    return this.http.post<CommonRespons<trader>>(`${Constants.API_BASE_URL}/${this.urlTrader}`,regTrad);
  }

  getTraderByCif(cif : string):Observable<CommonRespons<trader>>{
    return this.http.get<CommonRespons<trader>>(`${Constants.API_BASE_URL}/${this.urlTrader}?cif=`+ cif)
  }

  postOutStanding(date : Outstanding):Observable<CommonRespons<Outstanding>>{
    return this.http.post<CommonRespons<Outstanding>>(`${Constants.API_BASE_URL}/${this.urlBackoffice}/${this.urloutstanding}`,date);
  }

  getTraders() : Observable<CommonRespons<trader[]>>{
    return this.http.get<CommonRespons<trader[]>>(`${Constants.API_BASE_URL}/${this.urlTraders}`);
  }

  getListOutstandingidt(idTrader : String): Observable<CommonRespons<Outstanding>>{
    return this.http.get<CommonRespons<Outstanding>>(`${Constants.API_BASE_URL}/${this.urlTrader}/${this.urloutstanding}?idtrader=`+idTrader);
  }

  getListOutstanding(): Observable<CommonRespons<Outstanding[]>>{
    return this.http.get<CommonRespons<Outstanding[]>>(`${Constants.API_BASE_URL}/${this.urlBackoffice}/${this.urloutstandings}`);
  }
} 
