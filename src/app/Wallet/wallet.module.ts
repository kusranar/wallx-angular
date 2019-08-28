import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeWalletComponent } from './home-wallet/home-wallet.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WalletRootingModule } from './wallet-rooting.module';
import { RouterModule } from '@angular/router';
import { TopupWalletComponent } from './topup-wallet/topup-wallet.component';
import { RegisWallComponent } from './regis-wall/regis-wall.component';

@NgModule({ 
  declarations: [
    HomeWalletComponent,
    TopupWalletComponent,
    RegisWallComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    WalletRootingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class WalletModule { }
