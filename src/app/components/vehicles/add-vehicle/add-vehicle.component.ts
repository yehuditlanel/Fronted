import { Component, OnInit, Output ,EventEmitter, ViewChild} from '@angular/core';
  
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Vehicle } from 'src/app/classes/Vehicle';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.css']
})
export class AddVehicleComponent implements OnInit {
  @Output() addVehicle=new  EventEmitter<Vehicle>();
  @ViewChild ("vehicleForm",{static:true})form:NgForm;
  newVehicle:Vehicle;
    onSubmitForm(form:NgForm){
      this.addVehicle.emit(this.newVehicle);
      this.server.addObject("Vehicle",this.newVehicle);
      this.form.reset();
      
    }
    constructor(private server:ServerService) { this.newVehicle= new Vehicle("","",null,null); }
  
    ngOnInit() {
    }

}
