import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  id:string=null;
  idr:string=null;
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(data=>{
      this.idr=data.idr;
      this.id=data.id;

    })
    if(this.idr!=null)
       alert(this.idr)
    if(this.id!=null){
      alert(this.id)}

  }

}
