export class Passenger{
    PassengerCode:number;
    GroupCode:number;
    PassengerName:string;
    PassengerAddress:string;
    constructor( PassengerCode:number,GroupCode:number,PassengerName:string,PassengerAddress:string){
        this.PassengerCode=PassengerCode;
        this.GroupCode=GroupCode;
        this.PassengerName=PassengerName;
        this.PassengerAddress=PassengerAddress
    }
}