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
    ngOnInit() {
    //  this.id=localStorage.getItem("currentUser");
    //  this.ds.getTrackByUserId("Track",Number(this.id)).subscribe(data=>
    //   {
    //     this.tracks=data;
    //     console.log(this.tracks)
    //   });
    //   this.route.params.subscribe(
    //     params=>{
    //       this.nameOfUser=params.name;
    //   });
  }
}
