import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultSideBarComponent } from './default-side-bar/default-side-bar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register/register.component';
import { ListWalletComponent } from './Wallet/list-wallet/list-wallet.component';
import { SideBarAdminComponent } from './side-bar-admin/side-bar-admin.component';
import { UpdateWallComponent } from './Wallet/update-wall/update-wall.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultSideBarComponent,
    LoginComponent, 
    RegisterComponent,
    ListWalletComponent, 
    SideBarAdminComponent,
    UpdateWallComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule { }
