import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  { path : "",redirectTo:"/cust/dash",pathMatch: "full"},
  { path : "register", component : RegisterComponent},
  { path : "login", component : LoginComponent},
  { path : "cust",canActivate: [AuthGuardService],loadChildren:'./Customer/customer.module#CustomerModule'},
  { path : "acc", canActivate: [AuthGuardService],loadChildren:'./Account/account.module#AccountModule'},
  { path : "wallet", canActivate: [AuthGuardService],loadChildren:'./Wallet/wallet.module#WalletModule'},
  { path : "trans", canActivate: [AuthGuardService],loadChildren:'./Transaction/trans.module#TransModule'},
  { path : "trader",canActivate: [AuthGuardService],loadChildren:'./Trader/trader.module#TraderModule'},
  { path : "forex", canActivate: [AuthGuardService],loadChildren:'./Forex/forex.module#ForexModule'},
  { path : "admin", canActivate: [AuthGuardService],loadChildren:'./Admin/admin.module#AdminModule'} 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
