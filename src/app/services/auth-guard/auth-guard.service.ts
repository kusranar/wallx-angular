import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserServiceService } from '../user/user-service.service';
import { CanActivate } from '@angular/router/src/utils/preactivation';

@Injectable({
  providedIn: 'root'
})


export class AuthGuardService implements CanActivate { 
  path: import("@angular/router").ActivatedRouteSnapshot[];
  route: import("@angular/router").ActivatedRouteSnapshot;
  
  constructor(private servUser: UserServiceService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const userExists = localStorage.getItem('id');
    const BeExists = localStorage.getItem('idBe');

    if(userExists){
      return true;
    }else if(BeExists){
      return true;
    }else{
      this.router.navigate(['/login']);
      alert("Login terlebih dahulu");
      return false; 
    }
  }

} 
