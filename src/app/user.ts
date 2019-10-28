export class User{
    name_of_user:string;
    users_Id:number;
    address_of_user:string;
    phone_of_user:string;
    permition:number;
    constructor(name_of_user:string,users_id:number,address_of_user:string,phone_of_user:string,permition:number)
    {
        this.name_of_user=name_of_user;
        this.users_Id=users_id;
        this.address_of_user=address_of_user;
        this.phone_of_user=phone_of_user;
        this.permition=permition;
    }
    // constructor() {
    //     this.name="";
    //     this.password="";
    //  }
}