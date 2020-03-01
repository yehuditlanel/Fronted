import { Role } from './Role';

export class User{
    NameOfUser:string;
    UserId:number;
    AddressOfUser:string;
    PhoneOfUser:string;
    Role:Role;
    token?: string;
    constructor(name_of_user:string,users_id:number,address_of_user:string,phone_of_user:string,role:Role)
    {
        this.NameOfUser=name_of_user;
        this.UserId=users_id;
        this.AddressOfUser=address_of_user;
        this.PhoneOfUser=phone_of_user;
        this.Role=role;
    }
}