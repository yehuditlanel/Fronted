import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup,FormControl, NgForm } from '@angular/forms';
import { Travel } from '@app/classes/Travel';
import { Passenger } from '@app/classes/Passenger';
import { ServerService } from '@app/service/server.service';
import { AddTravel } from '@app/classes/AddTravel';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.css']
})
export class AddTravelComponent implements OnInit {

  colordis=["איסוף","פיזור"];
  groupNames;
  form;
  passengers:Passenger[]=[new Passenger("משה","אידלסון 9 ירושלים"),new Passenger("חיים לנאל","זרחי 5 ירושלים")]
  addTravel:AddTravel
  travel:Travel;
  constructor(private server:ServerService){
   
}
  ngOnInit() {
    this.server.getGroupsNames('Customer').subscribe(data=>{
      this.groupNames=data
      console.log(this.groupNames);
    })
    this.form=new FormGroup({
      GroupName:new FormControl(),
      CollectionOrDispersing:new FormControl(),
      DestinationOrSource:new FormControl(),
      Hour:new FormControl(),
      // Frequency:new FormControl(),
      filePath:new FormControl(),
      DateOfBegin:new FormControl(),
      DateOfEnd:new FormControl(),

    });
  }
  onSubmitForm(frm){
    this.travel=frm;
    this.addTravel=new AddTravel(this.travel,this.passengers);
    //read excel file
    this.server.addObject('Travel',this.addTravel);
    console.log(frm);
  } 
}
