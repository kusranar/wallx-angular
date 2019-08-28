import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WalletType } from 'src/app/Models/walletType';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(private servWall: WalletService, private router: Router, private builder: FormBuilder) { }
  addWallGroup: FormGroup;
  ngOnInit() { 
    this.listWalletType();
    this.addWallGroup = this.builder.group({
      description: ['', Validators.required]
    }) 
  }
 
  add() {
    this.servWall.addWallet(
      new WalletType(
        "", 
        this.addWallGroup.controls['description'].value,
        new Date()
      )
    ).subscribe(
      data => {
        if (data.code == "01") {
          alert("Create Succeess!");
          this.listWalletType();
        } else {
          alert("Failed!");
        }
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
}
 