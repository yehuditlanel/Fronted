export class User{
    nameOfUser:string;
    usersId:number;
    addressOfUser:string;
    phoneOfUser:string;
    permition:number;
    constructor(name_of_user:string,users_id:number,address_of_user:string,phone_of_user:string,permition:number)
    {
        this.nameOfUser=name_of_user;
        this.usersId=users_id;
        this.addressOfUser=address_of_user;
        this.phoneOfUser=phone_of_user;
        this.permition=permition;
    }
}