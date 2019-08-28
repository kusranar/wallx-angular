import { User } from './user';
import { Image } from './image';

export class Customer {
    cif : string;
    idCard : number;
    firstName : string;
    lastName : string;
    birthDate : string;
    gender : string;
    address : string;
    phone : number;
    email : string;
    mother : string;
    occupation : string;
    salary : string;

    idUser : User;
    idImage : Image;

    constructor(cif, idCard, firstName, lastName, birthDate, gender, address, phone, email, mother, occupation, salary, idUser, idImage){
        this.cif = cif;
        this.idCard = idCard;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.gender = gender;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.mother = mother;
        this.occupation = occupation;
        this.salary = salary;
        this.idUser = idUser
        this.idImage = idImage;
    }
}