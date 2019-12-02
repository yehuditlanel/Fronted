import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ServerService } from 'src/app/service/server.service';
@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers:User[]
  drivermekomi:User[]
  constructor(private ds:ServerService){
    this.drivermekomi=[new User("משה",1234,"eidelson 9","0504123232",1),new User("חיים",2345,"golgeknop 8","0988888888",1)];
  }
  onDriveAdded(data:User){
    this.drivers.push(new User(data.nameOfUser,data.usersId,data.addressOfUser,data.phoneOfUser,data.permition));
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
    this.drivers=[];
    this.ds.byGet("http://localhost:55750/api/User").subscribe(data => {
    this.drivers=data;
    console.log(this.drivers);
  });
  }
}
