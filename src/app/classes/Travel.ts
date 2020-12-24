import { Time } from '@angular/common';

export class Travel{
    TravelCode:number;
    GroupName:string;
    CollectionOrDispersing:string;
    DestinationOrSource:string;
    Hour:string;
    Frequency:string;
    DateOfBegin:Date;
    DateOfEnd:Date;
    Latitude:number;
    Longitude:number;
    constructor(travelCode:number,GroupName:string,collectionOrDispersing:string,destinationOrSource:string,hour:string,frequency:string,dateOfBegin:Date,dateOfEnd:Date, Latitude:number,Longitude:number){
       this.TravelCode=travelCode;
       this.GroupName=GroupName;
       this.CollectionOrDispersing=collectionOrDispersing;
       this.DestinationOrSource=destinationOrSource;
       this.Hour=hour;
       this.Frequency=frequency;
       this.DateOfBegin=dateOfBegin;
       this.DateOfEnd=dateOfEnd;
       this.Latitude=Latitude;
       this.Longitude=Longitude;

}
}