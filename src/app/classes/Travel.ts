export class Travel{
    TravelCode:number;
    CollectionOrDispersing:string
    DestinationOrSource:string;
    Hour:string
    Frequency:string;
    DateOfBegin:string;
    DateOfEnd:string;
    constructor(TravelCode:number,CollectionOrDispersing:string,DestinationOrSource:string,Hour:string,Frequency:string,DateOfBegin:string,DateOfEnd:string){
        this.TravelCode=TravelCode;
        this.CollectionOrDispersing=CollectionOrDispersing;
        this.DestinationOrSource=DestinationOrSource;
        this.Hour=Hour;
        this.Frequency=Frequency;
        this.DateOfBegin=DateOfBegin;
        this.DateOfEnd=DateOfEnd;
    }
}