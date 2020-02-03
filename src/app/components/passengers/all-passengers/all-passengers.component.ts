import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/classes/Passenger';
import { ServerService } from 'src/app/service/server.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-passengers',
  templateUrl: './all-passengers.component.html',
  styleUrls: ['./all-passengers.component.css']
})
export class AllPassengersComponent implements OnInit {
  trackCode:number;
passengers:Passenger[];
  constructor(private ps:ServerService,private route:ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params=>
      this.trackCode=params.id)
this.ps.getByParmater1("Passenger",this.trackCode).subscribe(data=>{
  this.passengers=data;
  console.log(this.passengers);
});
  }

}
