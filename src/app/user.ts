export class User{
    NameOfUser:string;
    UsersId:number;
    AddressOfUser:string;
    PhoneOfUser:string;
    Permition:number;
    constructor(name_of_user:string,users_id:number,address_of_user:string,phone_of_user:string,permition:number)
    {
        this.NameOfUser=name_of_user;
        this.UsersId=users_id;
        this.AddressOfUser=address_of_user;
        this.PhoneOfUser=phone_of_user;
        this.Permition=permition;
    }
}