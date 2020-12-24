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
  vehicle:Vehicle=new Vehicle(null,null,null);
  
  
    ngOnInit() {
  
      console.log(this.route.params);
      this.route.params.subscribe(
        params=>{
          this.vehicle.Code=params.Code
          this.vehicle.Description=params.Description
          this.vehicle.Count=params.Count
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
