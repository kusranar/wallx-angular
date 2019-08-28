import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TraderRootingModule } from './trader-rooting.module';
import { RouterModule } from '@angular/router';
import { HomeTraderComponent } from './home-trader/home-trader.component';
import { RegisTraderComponent } from './regis-trader/regis-trader.component';
import { TransToAccComponent } from './trans-to-acc/trans-to-acc.component';

@NgModule({
  declarations: [
    HomeTraderComponent,
    RegisTraderComponent,
    TransToAccComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TraderRootingModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class TraderModule { }
