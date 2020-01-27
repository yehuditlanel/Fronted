export class Customer{
    Conected_name:string;
    Conected_phone:string;
    Group_s_name:string;
    Group_s_code:number;
    constructor(conected_name:string,conected_phone:string,group_s_code:number,group_s_name:string){
        this.Conected_name=conected_name;
        this.Conected_phone=conected_phone;
        this.Group_s_name=group_s_name;
        this.Group_s_code=group_s_code;
    }
}