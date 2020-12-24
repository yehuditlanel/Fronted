import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '@app/service/server.service';
import { Track } from '@app/classes/Track';

@Component({
  selector: 'app-track2',
  templateUrl: './track2.component.html',
  styleUrls: ['./track2.component.css']
})
export class Track2Component implements OnInit {
  @Input()travelCode:number;
  userCode:number;
  tracks:Track[]=[];
  constructor(private router:Router,private route:ActivatedRoute,private server:ServerService) { }

  ngOnInit() {
    this.tracks=[];
    this.route.params.subscribe(params=>{
      this.userCode=params.id;
      if(params.id!='-'){
        this.travelCode=params.id
      }
      // if(params.id!='-'){
      //   this.server.getTrackByUserId('Track',this.userCode).subscribe(data=>{
      //     this.tracks=data;
      //   })
      //   //alert(this.userCode);
      // }
      // else{
        this.server.getByParmater("Track",this.travelCode).subscribe(data => {
        this.tracks=data;});
      // }
    })   
  }
  view(trackCode:number){
    this.router.navigate(["/viewMap",trackCode])
  }
  viewPassengers(trackCode:number){
    this.router.navigate(["/viewPassengers",trackCode])
  }

  viewMap(trackCode:number){
    this.router.navigate(["/viewMap",trackCode])
  }

}

