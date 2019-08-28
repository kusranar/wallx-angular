import { trader } from './trader';
import { currency } from './currency';

export class TransactionForex {
    idTransactionForex: number;
    buySell: string;
    date: Date;
    potensialPoinLose: number;
    pointLose: number;
    amount: number;
    rate: number;
    amountAfterSell: number;
    idTrader: trader;
    currency: currency;

    constructor(
        idTransactionForex, 
        buySell, 
        date, 
        potensialPoinLose, 
        pointLose, 
        amount, 
        rate, 
        amountAfterSell, 
        idTrader, 
        idCurrency
        ){
        this.idTransactionForex = idTransactionForex;
        this.amount = amount;
        this.amountAfterSell = amountAfterSell;
        this.buySell = buySell;
        this.currency = idCurrency;
        this.date = date;
        this.idTrader = idTrader;
        this.pointLose = pointLose;
        this.potensialPoinLose = potensialPoinLose;
        this.rate = rate;
    }
}
