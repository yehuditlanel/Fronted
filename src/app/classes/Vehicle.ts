export class Vehicle{
    License_plate:string
    Several_places:number
    Quantity_of_fuel_per_km:number
    Type:string;
    constructor(license_plate:string,type:string,several_places:number,quantity_of_fuel_per_km:number){
        this.License_plate=license_plate;
        this.Several_places=several_places;
        this.Quantity_of_fuel_per_km=quantity_of_fuel_per_km;
        this.Type=type;
    }
}