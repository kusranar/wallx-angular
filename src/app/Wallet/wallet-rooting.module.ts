import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeWalletComponent } from './home-wallet/home-wallet.component';
import { FormsModule } from '@angular/forms';

const wallRoutes : Routes = [ 
  {path : "homewall", component  : HomeWalletComponent}
]

@NgModule({ 
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(wallRoutes)
  ]
})
export class WalletRootingModule { }
