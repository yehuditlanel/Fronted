import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/classes/Passenger';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-all-passengers',
  templateUrl: './all-passengers.component.html',
  styleUrls: ['./all-passengers.component.css']
})
export class AllPassengersComponent implements OnInit {
passengers:Passenger[];
  constructor(private ps:ServerService) { }
  ngOnInit() {
this.ps.getByParmater("Travel",78).subscribe(data=>{
  this.passengers=data;
  console.log("1234");
  console.log(this.passengers);
});
  }

}
