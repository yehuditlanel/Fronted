import { Time } from '@angular/common';

export class Track{
    TrackCode:number;
    TravelCode:number;
    DriverId:number;
    LicensePlate:string;
    DateOfTravel:Time;
    HourOfBegin:Time;
    constructor(trackCode:number,travelCode:number,driverId:number,licensePlate:string,dateOfTravel:Time,hourOfBegin:Time){
      this.TrackCode=trackCode;
      this.TravelCode=travelCode;
      this.DriverId=driverId;
      this.LicensePlate=licensePlate;
      this.DateOfTravel=dateOfTravel;
      this.HourOfBegin=hourOfBegin; 
    }
}