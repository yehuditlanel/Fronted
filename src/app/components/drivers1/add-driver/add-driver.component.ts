import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-driver',
  templateUrl: './add-driver.component.html',
  styleUrls: ['./add-driver.component.css']
})
export class AddDriverComponent implements OnInit {
  myDriver:User;
  @Output() addDrive=new EventEmitter<User>();
  @ViewChild ("driverForm")form:NgForm
    constructor() { }
    onSubmitForm(form:NgForm){
      this.addDrive.emit(this.myDriver);
      this.form.reset();
      
    }

    ngOnInit() {
      this.myDriver=new User("",null,"","",null);
    }

}
