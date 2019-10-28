export class Customer{
    conected_name:string;
    conected_phone:string;
    group_s_code:string;
    group_s_name:string;
    constructor(conected_name:string,conected_phone:string,group_s_code:string,group_s_name:string){
        this.conected_name=conected_name;
        this.conected_phone=conected_phone;
        this.group_s_code=group_s_code;
        this.group_s_name=group_s_name;
    }
}