import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/classes/Travel';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-all-travels',
  templateUrl: './all-travels.component.html',
  styleUrls: ['./all-travels.component.css']
})
export class AllTravelsComponent implements OnInit {
travels:Travel[];
  constructor(private ts:ServerService) {
    this.ts.byGet("Travel").subscribe(data=>{
      this.travels=data;
      console.log(this.travels)
    });
   }

  ngOnInit() {

  }

}
