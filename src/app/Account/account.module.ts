import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountRootingModule } from './account-rooting.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransferComponent } from './transfer-account/transfer.component';
import { RegisAccComponent } from './regis-acc/regis-acc.component';
import { UpdateAccComponent } from './update-acc/update-acc.component';
import { TopupAcctoTraderComponent } from './topup-accto-trader/topup-accto-trader.component';
import { HistoryTransComponent } from './history-trans/history-trans.component';

@NgModule({
  declarations: [ 
    HomeComponent,  
    TransferComponent, 
    RegisAccComponent,
    UpdateAccComponent,
    TopupAcctoTraderComponent,
    HistoryTransComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    AccountRootingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }  
