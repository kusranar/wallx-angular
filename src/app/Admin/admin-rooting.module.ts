import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { UpdateCurrencyComponent } from './update-currency/update-currency.component';
import { AddWalletTypeComponent } from './add-wallet-type/add-wallet-type.component';
import { TransferAccountComponent } from './transfer-account/transfer-account.component';

const adminRoutes : Routes = [
  { path : "home", component : HomeAdminComponent},
  { path : "update", component : UpdateCurrencyComponent},
  { path : "add", component : AddWalletTypeComponent},
  { path : "trans", component : TransferAccountComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ] 
})
export class AdminRootingModule { }
