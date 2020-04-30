import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/classes/Vehicle';
import { ServerService } from 'src/app/service/server.service';
@Component({
  selector: 'app-detail-vehicle',
  templateUrl: './detail-vehicle.component.html',
  styleUrls: ['./detail-vehicle.component.css']
})
export class DetailVehicleComponent implements OnInit {
  constructor(private server:ServerService,private route:ActivatedRoute,private router:Router) {}
  vehicle:Vehicle=new Vehicle("","",null,null);
  
  
    ngOnInit() {
      this.route.params.subscribe(
        params=>{
          this.vehicle.License_plate=params.License_plate
          this.vehicle.Type=params.Type
          this.vehicle.Several_places=params.Several_places
          this.vehicle.Quantity_of_fuel_per_km=params.Quantity_of_fuel_per_km
        }
      )
    }
    viewTrack(){
      alert('viewTrack')
    }
    cancel(){
      this.router.navigate(['/vehicles']);
    }
  }
