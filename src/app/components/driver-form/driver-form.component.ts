import { Component, OnInit, Output,EventEmitter, ViewChild } from '@angular/core';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-driver-form',
  templateUrl: './driver-form.component.html',
  styleUrls: ['./driver-form.component.css']
})
export class DriverFormComponent implements OnInit {
  myDriver:User;
@Output() addDrive=new EventEmitter<User>();
@ViewChild ("driverForm")form:NgForm
  constructor() { }
  onSubmitForm(form:NgForm){
    this.addDrive.emit(this.myDriver);
    this.form.reset();
    
  }
// onAddDrive(users_Id,name_of_user,address_of_user,phone_of_user,permition){
//   this.addDrive.emit({
//     users_Id:users_Id.value,
//     name_of_user:name_of_user.value,
//     address_of_user:address_of_user.value,
//     phone_of_user:phone_of_user.value,
//     permition:permition.value
//   });
// }
  ngOnInit() {
    this.myDriver=new User("",null,"","",null);
  }

}
