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
  vehicle:Vehicle=new Vehicle(null,null,null);
  
  
    ngOnInit() {
      this.route.params.subscribe(
        params=>{
          this.vehicle.Code=params.Code
          this.vehicle.Description=params.Description
          this.vehicle.Count=params.Count
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
