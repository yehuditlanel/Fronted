export class Passenger{
    PassengerCode:number;
    Name:string;
    Address:string;
    Latitude:number;
    Longitude:number;
    constructor( PassengerName:string,PassengerAddress:string,Latitude:number,Longitude:number){
        this.Name=PassengerName;
        this.Address=PassengerAddress;
        this.Latitude=Latitude;
        this.Longitude=Longitude
    }
}