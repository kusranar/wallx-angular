import { transactionType } from './transactionType';
import { currency } from './currency';
import { bank } from './bank';

export class transaction {
    idTransaction : string;
    accountDebit : string;
    accountCredit : string;
    date : Date;
    description : string;
    amount :number;
    transactionType : transactionType;
    bank : bank;

    constructor(idTransaction,accountDebit,accountCredit,Date,description,amount,transactionType,bank){
        this.idTransaction = idTransaction;
        this.accountDebit = accountDebit;
        this.accountCredit = accountCredit;
        this.date = Date;
        this.description = description;
        this.amount = amount;
        this.transactionType = transactionType;
        this.bank = bank;
    }
}