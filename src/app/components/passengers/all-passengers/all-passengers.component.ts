import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/classes/Passenger';
import { ServerService } from 'src/app/service/server.service';
import { ActivatedRoute } from '@angular/router';
import { marker } from 'src/app/classes/marker';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-all-passengers',
  templateUrl: './all-passengers.component.html',
  styleUrls: ['./all-passengers.component.css']
})

export class AllPassengersComponent implements OnInit {
  trackCode:number;
  passengers:Passenger[];
  markers: marker[] = [{lat: 31.819721,lng:35.189881,label: 'A',draggable: true}]
  latitude = 31.819721;
  longitude = 35.189881;
  zoom:number = 15; 
  addresses:Array<string>; 
  result:any;
  origin
  destination
  waypoints = []  
  constructor(private ps:ServerService,private route:ActivatedRoute) {
   }
  ngOnInit() {
    this.waypoints=[];
    this.addresses=[];
    this.route.params.subscribe(params=>
      this.trackCode=params.id)
    this.ps.getByParmater1("Passenger",this.trackCode).subscribe(data=>{
      this.passengers=data;
      for(var i = 0; i < this.passengers.length; i++) {
        this.addresses.push(this.passengers[i].PassengerAddress);
        this.findLocation(this.passengers[i].PassengerAddress,i);
      }
      console.log(this.addresses);
    console.log(this.passengers);});   
  }
  // הפונקציה שמקבלת את הכתובת ושולחת לסרביס
  findLocation(address:string,i:number): void {
    var addressToSend = address.split(' ').join('+');// מחליפה את הרווחים ב +
    console.log(addressToSend)
    this.ps.getLocation(addressToSend)
    .subscribe(res => {
        this.result = res.results[0].geometry.location; // הגישה לנקודות ציון
        console.log(this.result);
     // this.result = JSON.stringify(this.result);
     var someObj = {location:{lat:this.result.lat,lng:this.result.lng}}
     if(i==0){
       this.origin=someObj;
       this.destination=someObj
     }
     else if(i==this.passengers.length-1){
       this.destination=someObj
     }
     else{
       this.waypoints.push(someObj);
     }
      console.log(this.waypoints)
      });
}
}