import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { User } from 'src/app/classes/User1';
import { NgForm } from '@angular/forms';
import { ServerService } from 'src/app/service/server.service';
@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  newDriver:User;
  @Output() addDrive=new EventEmitter<User>();
  @ViewChild ("driverForm")form:NgForm
    constructor(private ds:ServerService) {
      this.newDriver=new User("",null,"","","Driver");
     }
     onSubmitForm(form:NgForm){
      this.addDrive.emit(this.newDriver);
       this.ds.addObject("User",this.newDriver);
      this.form.reset();
      
    }

    ngOnInit() {
    }

}