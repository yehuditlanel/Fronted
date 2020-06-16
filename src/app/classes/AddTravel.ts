import { Travel } from './Travel';
import { Passenger } from './Passenger';

export class AddTravel{
    detailsOfTravel:Travel;
    passenger:Passenger[];
    constructor(detailsOfTravel:Travel,passenger:Passenger[]) {
       this.detailsOfTravel=detailsOfTravel
        this.passenger=passenger;
    }
}