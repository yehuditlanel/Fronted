import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Track } from 'src/app/classes/Track';
import { ServerService } from 'src/app/service/server.service';
@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private route:ActivatedRoute,private ds:ServerService) { }
  nameOfUser:string;
  tracks:Track[];
  id:string;
today:Track[];
  // get sortTrack(){
  //   return this.tracks.sort((a,b)=>{
  //     return <any>new Date(b.DateOfTravel)-<any>new Date(a.DateOfTravel);
  //   })
  // }
  // f(){
  //   let date: Date = new Date();  
  //   let res=this.tracks.filter(
  //     y=>y.DateOfTravel<date

  //     );
  //   console.log(res);
  //   console.log("Date = " + date);
  //   console.log("hh")
  // }
    ngOnInit() {
     this.id=localStorage.getItem("currentUser");
     this.ds.getTrackByUserId("Track",Number(this.id)).subscribe(data=>
      {
        this.tracks=data;
        // this.f();
        console.log(this.tracks)
      });
      this.route.params.subscribe(
        params=>{
          this.nameOfUser=params.name;
      });
  }
}
