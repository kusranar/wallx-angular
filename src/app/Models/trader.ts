import { Customer } from './customer';
import { statusType } from './statusType';

export class trader {
    idTrader : string;
    nameTrader : string;
    customer : Customer;
    statusType : statusType;
    balance : number;

    constructor(idTrader, nameTrader, cif, idStatusType, balance ){
        this.idTrader = idTrader;
        this.nameTrader = nameTrader;
        this.customer = cif;
        this.statusType = idStatusType;
        this.balance = balance;
    }
}