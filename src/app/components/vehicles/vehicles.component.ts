import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/service/vehicle.service';
import { ServerService } from 'src/app/service/server.service';
import { Vehicle } from 'src/app/classes/Vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
vehicle:Vehicle[]
  constructor(private vs:VehicleService,private vs1:ServerService) { 
  }
  
  ngOnInit() {
    this.vehicle=[];
    this.vs1.byGet("http://localhost:55750/api/Vehicle").subscribe(data=>{
      this.vehicle=data;
      console.log(data);
    });
    //this.vs.addVehicle();
  }

}
