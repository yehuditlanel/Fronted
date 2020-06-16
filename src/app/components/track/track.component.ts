import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from '@app/service/server.service';
import { Track } from '@app/classes/Track';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  @Input()travelCode:number;
  tracks:Track[]=[];
  constructor(private router:Router,private server:ServerService) { }

  ngOnInit() {
    this.tracks=[];
        this.server.getByParmater("Track",this.travelCode).subscribe(data => {
        this.tracks=data;
      });
  }
  view(trackCode:number){
    this.router.navigate(["/viewMap",trackCode])
  }
}
