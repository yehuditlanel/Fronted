import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/classes/Travel';
import { Router } from '@angular/router';
import { Track } from 'src/app/classes/Track';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-all-travels',
  templateUrl: './all-travels.component.html',
  styleUrls: ['./all-travels.component.css']
})
export class AllTravelsComponent implements OnInit {
travels:Travel[];
tracks:Track[];
  constructor(private server:ServerService,private router:Router) { }

  ngOnInit() {
    this.travels=[];
    this.server.byGet("Travel").subscribe(data => {
    this.travels=data;
    console.log(this.travels);
    
  });
  this.tracks=[];
    this.server.byGet("Track").subscribe(data => {
    this.tracks=data;
    console.log(this.tracks);
  });
  }
  OnMouseOver(id:number)
{
  this.server.getByParmater("Track",id).subscribe(data=> {this.tracks=data; console.log("succeed")});  
}

}
