import { Time } from '@angular/common';

export class Travel{
    TravelCode:number;
    CollectionOrDispersing:string;
    DestinationOrSource:string;
    Hour:Time;
    Frequency:string;
    DateOfBegin:Date;
    DateOfEnd:Date;
    constructor(travelCode:number,collectionOrDispersing:string,destinationOrSource:string,hour:Time,frequency:string,dateOfBegin:Date,dateOfEnd:Date){
       this.TravelCode=travelCode;
       this.CollectionOrDispersing=collectionOrDispersing;
       this.DestinationOrSource=destinationOrSource;
       this.Hour=hour;
       this.Frequency=frequency;
       this.DateOfBegin=dateOfBegin;
       this.DateOfEnd=dateOfEnd;

}
}