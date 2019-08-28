import { Customer } from './customer';
import { statusType } from './statusType';

export class Account {
    accountNumber : string;
    cashtag : string;
    openDate : Date;
    idStatusType : statusType;
    customer : Customer;
    balance : number;

    constructor(accountNumber,cashtag,openDate,idStatusType,cif,balance){
        this.accountNumber = accountNumber;
        this.cashtag = cashtag;
        this.openDate = openDate;
        this.idStatusType = idStatusType;
        this.customer = cif;
        this.balance = balance;
    }
}