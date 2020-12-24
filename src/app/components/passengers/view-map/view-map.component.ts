import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { marker } from '@app/classes/marker';
import { Passenger } from '@app/classes/Passenger';
import { ServerService } from '@app/service/server.service';

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.css']
})
export class ViewMapComponent implements OnInit {
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
        this.addresses.push(this.passengers[i].Address);
        if(i==0){
          this.origin={location:{lat:this.passengers[i].Latitude,lng:this.passengers[i].Longitude}}
          /////////
          this.destination={location:{lat:this.passengers[i].Latitude,lng:this.passengers[i].Longitude}}
        }
        else{
        this.waypoints.push({location:{lat:this.passengers[i].Latitude,lng:this.passengers[i].Longitude}})
        }
      }
      console.log(this.waypoints);
      debugger
      console.log(this.addresses);
    console.log(this.passengers);});   
  }
}