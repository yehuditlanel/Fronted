import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from 'src/app/service/server.service';
import { Track } from 'src/app/classes/Track';
import { Passenger } from 'src/app/classes/Passenger';

@Component({
  selector: 'app-all-track',
  templateUrl: './all-track.component.html',
  styleUrls: ['./all-track.component.css']
})
export class AllTrackComponent implements OnInit {
  tracks:Track[];
  passengers:Passenger[];
  s:number;
  constructor(private route:ActivatedRoute,private ts:ServerService) {
    
   }
   view(trackCode:number){
     this.ts.getByParmater1("Passenger",trackCode).subscribe(
      data=>{
        this.passengers=data;
        console.log(this.passengers);
      }
     )
   }
  ngOnInit() {
    this.route.params.subscribe(
      params=>this.s=params.id
    )
    this.ts.getByParmater("Track",this.s).subscribe(
      data=>{
        this.tracks=data
        console.log(this.tracks);
      }
      );
  }

}
