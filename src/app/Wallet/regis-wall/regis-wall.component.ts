import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account/account.service';
import { Router } from '@angular/router';
import { Account } from 'src/app/Models/account';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { WalletType } from 'src/app/Models/walletType';
import { wallet } from 'src/app/Models/wallet'; 

@Component({
  selector: 'app-regis-wall',
  templateUrl: './regis-wall.component.html',
  styleUrls: ['./regis-wall.component.css']
})
export class RegisWallComponent implements OnInit {


  constructor(private servWall: WalletService, private servAcc: AccountService, private router: Router, private builder: FormBuilder) { }

  regisWallGroup: FormGroup;

  accounts: Account[];
  walletTypes: WalletType[];
  cif = localStorage.getItem('id');
 
  ngOnInit() {
    this.listAcc();
    this.listWalletType();
    this.regisWallGroup = this.builder.group({ 
      accountNumber: ['', Validators.required],
      idWalletType: ['', Validators.required]
    })
  }

  exwallet: wallet;

  @Input()
  walletaccount: wallet;

  @Output()
  output = new EventEmitter;

  respCode: string;
  regisWall() {
    this.servWall.regisWall(
      new wallet(
        "",
        new Date(),
        {
          cif: this.cif
        },
        {
          accountNumber : this.regisWallGroup.controls['accountNumber'].value
        },
        {
          idWalletType : this.regisWallGroup.controls['idWalletType'].value
        }
      )
    ).subscribe(
      data => {
        if (data.code == "01") {
            alert("Create Succeess!");
            this.exwallet = data.data;
            this.output.emit(this.exwallet);
        }else if(data.code =="33") {
          alert("Account Already Registered");
        } else {
          alert("Failed!"); 
        } 
      }
    )
  }


  listAcc() {
    this.servAcc.listAcc(this.cif).subscribe(
      data => {
        this.accounts = data["data"];
      }
    )
  }

  listWalletType() {
    this.servWall.getListWalletType().subscribe(
      data => {
        this.walletTypes = data["data"];
      }
    )
  }

}
