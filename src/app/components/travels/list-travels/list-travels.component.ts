import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Travel } from 'src/app/classes/Travel';

@Component({
  selector: 'app-list-travels',
  templateUrl: './list-travels.component.html',
  styleUrls: ['./list-travels.component.css']
})
export class ListTravelsComponent implements OnInit {

  constructor(private router:Router) { }
@Input()travel:Travel;
updateCustomer(){
  this.router.navigate(['/edit',this.travel])
   // this.router.navigateByUrl(['/customers',this.customers[i]])
}
deleteCustomer(){
  this.router.navigate(['/delete',this.travel])
}
  ngOnInit() {
  }

}
