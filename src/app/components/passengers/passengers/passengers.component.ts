import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Passenger } from '@app/classes/Passenger';
import { ServerService } from '@app/service/server.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {
  trackCode:number;
  // passengers:Passenger[];
  passengers:MatTableDataSource<Passenger>;
  constructor(private route:ActivatedRoute,private server:ServerService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>
      this.trackCode=params.id)
      this.server.getByParmater1("Passenger",this.trackCode).subscribe(data=>{
        this.passengers=new MatTableDataSource(data);
        console.log(this.passengers);});   
      }
  displayedColumns: string[] = ['Name', 'Address'];

  }
