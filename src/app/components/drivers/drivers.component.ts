import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers:User[]
  constructor(){
    this.drivers=[new User("משה",1234,"eidelson 9","0504123232",1),new User("חיים",2345,"golgeknop 8","0988888888",1)];
  }
  onDriveAdded(data:User){
    this.drivers.push(data);
  }
  // onDriveAdded(data:User){
  //   this.drivers.push({
  //     users_Id:data.users_Id,
  //     name_of_user:data.name_of_user,
  //     address_of_user:data.address_of_user,
  //     phone_of_user:data.phone_of_user,
  //     permition:data.permition
  //   })
  // }
  ngOnInit() {
  }
}
