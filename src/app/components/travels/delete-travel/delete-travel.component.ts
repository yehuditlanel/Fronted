import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Travel } from '@app/classes/Travel';
import { ServerService } from '@app/service/server.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-travel',
  templateUrl: './delete-travel.component.html',
  styleUrls: ['./delete-travel.component.css']
})
export class DeleteTravelComponent implements OnInit {
  travel:Travel=new Travel(null,null,null,null,null,null,null,null,null,null);

  constructor(private route:ActivatedRoute,private server:ServerService,private location:Location,private router:Router) { }

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
  cancel(){
    this.location.back();   
  }
  onSubmitForm(){
    this.server.deleteObjectByNumber("Travel",this.travel.TravelCode)
    // this.server.deleteObjectByNumber("Customer",this.customer.Group_s_code);
    this.router.navigate(['/travel/-']);

  }

}
