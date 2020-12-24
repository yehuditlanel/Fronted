import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/classes/Vehicle';
import { ServerService } from 'src/app/service/server.service';
@Component({
  selector: 'app-all-vehicle',
  templateUrl: './all-vehicle.component.html',
  styleUrls: ['./all-vehicle.component.css']
})
export class AllVehicleComponent implements OnInit {
  vehicles:Vehicle[];
  
  constructor(private server:ServerService,private router:Router){ 
  }

  ngOnInit() {
    this.vehicles=[];
    this.server.byGet("Vehicle").subscribe(data => {
    this.vehicles=data;
    console.log(this.vehicles);
  });
  }
  updateVehicle(i:string){
    this.router.navigate(['/edit',this.vehicles[i]])
     // this.router.navigateByUrl(['/vehicles',this.vehicles[i]])
  }
  onVehicleAdded(data:Vehicle){
    this.vehicles.push(new Vehicle(data.Code,data.Count,data.Description));
  }
}