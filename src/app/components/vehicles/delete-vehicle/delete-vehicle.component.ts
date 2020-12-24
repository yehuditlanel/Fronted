import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from 'src/app/classes/Vehicle';
import { ServerService } from 'src/app/service/server.service';
@Component({
  selector: 'app-delete-vehicle',
  templateUrl: './delete-vehicle.component.html',
  styleUrls: ['./delete-vehicle.component.css']
})
export class DeleteVehicleComponent implements OnInit {
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
    cancel(){
      this.router.navigate(['/vehicles']);
    }
    onSubmitForm(){
       this.server.deleteObjectByNumber("Vehicle",this.vehicle.Code);
    }

}
