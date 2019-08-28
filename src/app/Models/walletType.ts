export class WalletType {
    idWalletType : number;
    description : string;
    openDate : Date;

    constructor(idWalletType,description,openDate){
        this.idWalletType = idWalletType;
        this.description = description;
        this.openDate = openDate;
    }
}