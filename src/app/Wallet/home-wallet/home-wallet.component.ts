import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { wallet } from 'src/app/Models/wallet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WalletType } from 'src/app/Models/walletType';

@Component({
  selector: 'app-home-wallet',
  templateUrl: './home-wallet.component.html',
  styleUrls: ['./home-wallet.component.css']
})
export class HomeWalletComponent implements OnInit {

  wallets: wallet[];
  constructor(private servWall: WalletService, private router : Router, private builder : FormBuilder) { }
  updateWallGroup  : FormGroup;
  cif = localStorage.getItem('id');

  ngOnInit() {
    this.listWalletAccount();
    this.listWalletType();
    this.updateWallGroup = this.builder.group({
      idWalletType: ['', Validators.required]
    })
  }

  wallet: wallet;

  getDataWall(list) {
    this.wallet = list;
  }

  listWalletAccount() {
    this.servWall.listWall(this.cif).subscribe(
      data => {
        this.wallets = data.data;
      }
    )
  }

  walletTypes: WalletType[];
  listWalletType() { 
    this.servWall.getListWalletType().subscribe(
      data => {
        this.walletTypes = data["data"];
      }
    )
  }

  asd2;
  fungsiOutput(asd) {
    this.asd2 = asd;
    this.listWalletAccount();
  }
  update() {
    this.servWall.putWall(
      new wallet(
        this.wallet.idWallet, 
        this.wallet.openDate, 
        this.wallet.customer, 
        this.wallet.account,
        {
          idWalletType : this.updateWallGroup.controls['idWalletType'].value
        }
        
      )
    ).subscribe(
      data => {
        if (data.code == "01") {
          alert("Update Success");
          this.listWalletAccount();
        } else{
          alert("Faild")
        }
      }
    );
  }
}
