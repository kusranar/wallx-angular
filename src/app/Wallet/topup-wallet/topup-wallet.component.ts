import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from 'src/app/services/account/account.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/Models/account';
import { WalletService } from 'src/app/services/wallet/wallet.service';
import { WalletType } from 'src/app/Models/walletType';
import { transaction } from 'src/app/Models/transaction';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { wallet } from 'src/app/Models/wallet';
 
@Component({
  selector: 'app-topup-wallet',
  templateUrl: './topup-wallet.component.html',
  styleUrls: ['./topup-wallet.component.css']
})
export class TopupWalletComponent implements OnInit {

  constructor(private servTrans: TransactionService, private servAcc: AccountService, private servWall: WalletService, private router: Router, private builder: FormBuilder) { }

  topUpGroup: FormGroup;
  walletTypes: WalletType[];
  accounts: Account[];

  cif = localStorage.getItem('id');

  ngOnInit() {
    this.listAccInWall();
    this.listWalletType();
    this.topUpGroup = this.builder.group({
      accountNumber: ['', Validators.required],
      amount: ['', Validators.required]
    })
  }

  @Input()
  accountNumber = ''
  amount = ''
  
  wallet : wallet;
  listAccInWall() {
    this.servAcc.getWallByAcc(this.cif).subscribe(
      data => {
        this.wallet = data.data;
      }
    )
  }

  wallettype : wallet;
  listWalletAccById() {
    this.servWall.getWallAccById(this.topUpGroup.controls['accountNumber'].value).subscribe(
      data => {
        this.wallettype = data.data;
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

  bool3:Boolean;
  code: string;
  data1: transaction;
  topUPTrans() {
    this.bool3 = this.isNumeric(this.topUpGroup.controls['amount'].value);
    if (!this.bool3) {
      alert('Please input correct amount');
    } else {
    this.servTrans.Topup(
      new transaction( 
        "",
        this.topUpGroup.controls['accountNumber'].value,
        this.wallettype.walletType.description,
        new Date(),
        "Topup",
        this.topUpGroup.controls['amount'].value, 
        {
          idTransactionType: 1
        },
        {
          idBank: 666
        }
      ) 
    ).subscribe(
      data => {
        if (data.code == "01") {
          alert("Topup Success");
          this.router.navigate([`acc/home`]);
        } else {
          alert("Amount Is Not Enough");
        }
      }
    )
  }
}

isNumeric(yourString) {
  return !isNaN(yourString)
}

}
