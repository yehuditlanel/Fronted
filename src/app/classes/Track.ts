export class Track{
    TrackCode:number;
    TravelCode:number;
    DriverId:number;
    LicensePlate:string;
    DateOfTravel:string;
    HourOfBegin:string;
    constructor(TrackCode:number,TravelCode:number,DriverId:number,LicensePlate:string,DateOfTravel:string,HourOfBegin:string)
    {
        this.TrackCode=TrackCode;
        this.TravelCode=TravelCode;
        this.DriverId=DriverId;
        this.LicensePlate=LicensePlate;
        this.DateOfTravel=DateOfTravel;
        this.HourOfBegin=HourOfBegin;
    }
}