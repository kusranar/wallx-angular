import { Customer } from './customer';
import { Account } from './account';
import { WalletType } from './walletType';

export class wallet {
    idWallet : string;
    openDate : Date;
    customer : Customer; 
    account : Account;
    walletType : WalletType;

    constructor(idWallet, openDate, cif, accountNumber, idWalletType){
        this.idWallet = idWallet;
        this.openDate = openDate;
        this.customer = cif; 
        this.account = accountNumber; 
        this.walletType = idWalletType;
    }
}