import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/classes/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css']
})
export class ListDriversComponent implements OnInit {
  @Input()driver:User;
  constructor(private router:Router) { }
  updateDriver(){
    this.router.navigate(['/editDriver',this.driver])
     // this.router.navigateByUrl(['/customers',this.customers[i]])
  }
  deleteDriver(){
    this.router.navigate(['/deleteDriver',this.driver])
  }
  ngOnInit() {
  }

}