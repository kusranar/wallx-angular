import { User } from './user';

export class BackOffice {
    idBackoffice : string;
    firstName : string;
    lastName : string;
    phoneNumber : string;
    address : string;
    idUser : User; 

    constructor(idBackOffice,firstName,lastName,phoneNumber,address,idUser){
        this.idBackoffice = idBackOffice;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.idUser = idUser;
    }
}