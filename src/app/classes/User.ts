import { Role } from './Role';

export class User{
    NameOfUser:string;
    UserId:number;
    AddressOfUser:string;
    PhoneOfUser:string;
    Role:Role;
    constructor(NameOfUser:string,UserId:number,AddressOfUser:string,PhoneOfUser:string,Role:Role)
    {
        this.NameOfUser=NameOfUser;
        this.UserId=UserId;
        this.AddressOfUser=AddressOfUser;
        this.PhoneOfUser=PhoneOfUser;
        this.Role=Role;
    }
}