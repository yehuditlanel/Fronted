import { Component, OnInit, ViewChild } from '@angular/core';
import { Travel } from 'src/app/classes/Travel';
import { Track } from 'src/app/classes/Track';
import { ServerService } from 'src/app/service/server.service';
import { Router, ActivatedRoute } from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-all-travels',
  templateUrl: './all-travels.component.html',
  styleUrls: ['./all-travels.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AllTravelsComponent implements OnInit {
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  travels:MatTableDataSource<Travel>;
  columnsToDisplay = ['GroupName','CollectionOrDispersing','DestinationOrSource','Hour','Frequency','DateOfBegin','DateOfEnd','action'];
  expandedElement: Travel | null;
  constructor(private server:ServerService,private router:Router,private route:ActivatedRoute){}
  ngOnInit() {
    this.route.params.subscribe(params=>{console.log(params)
    if(params.id=='-'){
    this.server.byGet("Travel").subscribe(data=>{
      this.travels=new MatTableDataSource(data);
      this.travels.sort=this.sort
      console.log(this.travels);
    });
  }
  else{
    this.server.getTravelByGroupCode("Travel",params.id).subscribe(data=>{
      this.travels=new MatTableDataSource(data);
      this.travels.sort=this.sort    }
      )
  }
  });
  }
  date:Date;
  // travel1:Travel= new Travel(1,'ee','rrr','uuu','89','ii',this.date,this.date,0,0);
  onTravelAdded(data1:Travel){
    // new Travel(data.TravelCode,data.GroupName,data.CollectionOrDispersing,data.DestinationOrSource,data.Hour,data.Frequency,data.DateOfBegin,data.DateOfEnd)
    // this.travels.push(new MatTableDataSource(data));
    // this.travels.push(new MatTableDataSource(this.travel1));
    debugger
    this.travels.data.push(data1);
// (this.travels as object).push
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.travels.filter = filterValue.trim().toLowerCase();
  }
  addTravel(){
    this.router.navigate(['/addTravel']);
  }
  updateTravel(travel:Travel){
    console.log(travel);
    this.router.navigate(["/editTravel/:id",travel]);

  }
  deleteTravel(travel:Travel){
    console.log(travel)
    this.router.navigate(["/deleteTravel/:id",travel]);
  }
}