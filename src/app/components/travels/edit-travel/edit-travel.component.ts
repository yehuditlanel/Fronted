import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from '@app/service/server.service';
import { Travel } from '@app/classes/Travel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-travel',
  templateUrl: './edit-travel.component.html',
  styleUrls: ['./edit-travel.component.css']
})
export class EditTravelComponent implements OnInit {
  travel:Travel=new Travel(null,null,null,null,null,null,null,null,null,null);

  constructor(private route:ActivatedRoute,private server:ServerService,private location:Location) { }

  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        this.travel.GroupName=params.GroupName
        this.travel.CollectionOrDispersing=params.CollectionOrDispersing
        this.travel.DateOfBegin=params.DateOfBegin
        this.travel.DateOfEnd=params.DateOfEnd
        this.travel.DestinationOrSource=params.DestinationOrSource
        this.travel.Frequency=params.Frequency
        this.travel.Hour=params.Hour
        this.travel.TravelCode=params.TravelCode
        console.log(this.travel);
      });
  }
  onSubmitForm(){
    this.server.updateObject("Travel",this.travel);
    this.location.back();   
  }
  cancel(){
    this.location.back();
  }

}
