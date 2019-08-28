import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Models/user';
import { Customer } from '../../Models/customer';
import { BackOffice } from '../../Models/backOffice';
import { Observable } from 'rxjs';
import { CommonRespons } from 'src/app/Models/commonResponse';
import { login } from 'src/app/Models/login';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 
  urlLogin = 'login';
  urlCustomer = 'customer';
  urlRegister = 'registration';
  urlBackOffice = 'backoffice';
  urlUser = 'user';
  constructor(private http: HttpClient) { }
  
  postUser(User : User) : Observable <CommonRespons<User>>{
    return this.http.post<CommonRespons<User>>(`${Constants.API_BASE_URL}/${this.urlUser}/${this.urlRegister}`,User);
  }

  login (login : login){
    return this.http.post<User>(`${Constants.API_BASE_URL}/${this.urlUser}/${this.urlLogin}`, login);
  }

  getIdCustomer(user : User){
    return this.http.post<Customer>(`${Constants.API_BASE_URL}/${this.urlCustomer}/${this.urlLogin}`, user)
  }

  getIdBackOffice(user : User){
    return this.http.post<BackOffice>(`${Constants.API_BASE_URL}/${this.urlBackOffice}/${this.urlLogin}`, user)
  }

  checkusername(username : String) : Observable<CommonRespons<User>>{
    return this.http.get<CommonRespons<User>>(`${Constants.API_BASE_URL}/${this.urlUser}/?username=${username}`);
  } 
}
