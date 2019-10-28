import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  Name_of_user:string;
  travelToDriver:string[];
    ngOnInit() {
     
      this.route.params.subscribe(
        params=>this.Name_of_user=params.Name_of_user
        
      )
      alert(this.Name_of_user);
  }

}
