import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/service/server.service';
import { Vehicle } from 'src/app/classes/Vehicle';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
vehicle:Vehicle[]
  constructor(private vs:ServerService) { 
  }
  
  ngOnInit() {
    this.vehicle=[];
    this.vs.byGet("Vehicle").subscribe(data=>{
      this.vehicle=data;
      console.log(data);
    });
  }

}
