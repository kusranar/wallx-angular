import { wallet } from './wallet';

export class walletAccount {
    idWalletAccount : number;
    openDate : Date;
    name : string;
    wallet : wallet;

    constructor(idWalletAccount, openDate, name, idWallet){
        this.idWalletAccount = idWalletAccount;
        this.openDate = openDate; 
        this.name = name;
        this.wallet = idWallet;
    }
}
