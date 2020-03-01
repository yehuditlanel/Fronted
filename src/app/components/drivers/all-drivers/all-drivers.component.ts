import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/User';
import { ServerService } from 'src/app/service/server.service';
@Component({
  selector: 'app-all-drivers',
  templateUrl: './all-drivers.component.html',
  styleUrls: ['./all-drivers.component.css']
})
export class AllDriversComponent implements OnInit {
  searchText="";
  drivers:User[]
  constructor(private ds:ServerService){
  }
  onDriveAdded(data:User){
    this.drivers.push(new User(data.NameOfUser,data.UserId,data.AddressOfUser,data.PhoneOfUser,data.Role));
  }
  ngOnInit() {
    this.drivers=[];
    this.ds.byGet("User").subscribe(data => {
    this.drivers=data;
    console.log(this.drivers);
  });
  }
}