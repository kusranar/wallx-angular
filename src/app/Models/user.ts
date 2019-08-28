import { RoleType } from './roleType';

export class User {
    idUser : string;
    username : string;
    password : string;
    idRoleType : RoleType;
    registerDate : Date;

    constructor(idUser, username, password, idRoleType,registerDate){
        this.idUser = idUser;
        this.username = username;
        this.password = password;
        this.idRoleType = idRoleType;
        this.registerDate = registerDate;
    }
}