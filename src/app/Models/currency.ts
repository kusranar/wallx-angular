export class currency {
    idCurrency : number;
    description: string;
    ccyBase : string;
    ccyDestination : string;
    date : Date;
    buy : number;
    sell :  number;
    

    constructor(idCurrency,description,ccyBase,ccyDestination,date,buy,sell){
        this.idCurrency = idCurrency;
        this.description = description;
        this.ccyBase = ccyBase;
        this.ccyDestination = ccyDestination;
        this.date = date;
        this.buy = buy;
        this.sell = sell;
    }
}