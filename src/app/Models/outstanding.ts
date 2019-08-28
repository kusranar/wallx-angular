import { trader } from './trader';

export class Outstanding {
    idOutstanding : number;
    date : Date;
    outstandingData : number;
    idTrader : trader;

    constructor(idOutstanding, date, outstandingData, idTrader){
        this.idOutstanding = idOutstanding;
        this.date = date;
        this.outstandingData = outstandingData;
        this.idTrader = idTrader;
    }
}