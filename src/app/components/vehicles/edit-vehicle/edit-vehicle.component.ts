import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/classes/Vehicle';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css']
})
export class EditVehicleComponent implements OnInit {
  constructor(private server:ServerService,private route:ActivatedRoute,private router:Router) {}
  vehicle:Vehicle=new Vehicle("","",null,null);
  
  
    ngOnInit() {
  
      console.log(this.route.params);
      this.route.params.subscribe(
        params=>{
          this.vehicle.License_plate=params.License_plate
          this.vehicle.Type=params.Type
          this.vehicle.Several_places=params.Several_places
          this.vehicle.Quantity_of_fuel_per_km=params.Quantity_of_fuel_per_km
          console.log(this.vehicle);
        }
      )
      console.log(this.vehicle);
    }
    onSubmitForm(){
      console.log("jjjkjkjkj")
      this.server.updateObject("Vehicle",this.vehicle);
      this.router.navigate(['/vehicles']);
     
    }
    cancel(){
      this.router.navigate(['/vehicles']);
    }

}
