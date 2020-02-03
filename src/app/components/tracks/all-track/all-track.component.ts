import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/service/server.service';
import { Track } from 'src/app/classes/Track';

@Component({
  selector: 'app-all-track',
  templateUrl: './all-track.component.html',
  styleUrls: ['./all-track.component.css']
})
export class AllTrackComponent implements OnInit {
  tracks:Track[];
  constructor(private server:ServerService,private router:Router) { }

  ngOnInit() {
    this.tracks=[];
    this.server.byGet("Track").subscribe(data => {
    this.tracks=data;
    console.log(this.tracks);
  });
  }

}
