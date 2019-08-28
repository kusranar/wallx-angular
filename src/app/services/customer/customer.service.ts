import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/Models/customer';
import { Observable } from 'rxjs';
import { CommonRespons } from 'src/app/Models/commonResponse';
import { Constants } from '../constants';

@Injectable({ 
  providedIn: 'root'
})
export class CustomerService {

  urlLogin = 'login';
  urlCustomer = 'customer'; 
  urlRegister = 'registration';
  urlBackOffice = 'backoffice';
  urlUser = 'user';
  constructor(private http : HttpClient) { } 

  postCustomer(postCust : Customer) :Observable<CommonRespons<Customer>>{
    return this.http.post<CommonRespons<Customer>>(`${Constants.API_BASE_URL}/${this.urlCustomer}/${this.urlRegister}`,postCust);
  }

  checkid(idCard : Customer) : Observable<CommonRespons<Customer>>{
    return this.http.post<CommonRespons<Customer>>(`${Constants.API_BASE_URL}/${this.urlCustomer}/checkidcard`,idCard);  
  }

  getCustomerByCif(cif : string): Observable<CommonRespons<Customer>>{
    return this.http.get<CommonRespons<Customer>>(`${Constants.API_BASE_URL}/${this.urlCustomer}/${this.urlCustomer}/`+cif)
  }
  
}
