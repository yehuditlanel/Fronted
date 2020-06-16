import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/classes/Customer';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {

  constructor(private router:Router) { }
@Input()customer:Customer;
updateCustomer(){
  this.router.navigate(['/edit/:id',this.customer])
}
deleteCustomer(){
  this.router.navigate(['/delete:/id',this.customer])
}
detailsCustomer(){
  this.router.navigate(['/detailCustomer/:id',this.customer])
}
viewTravels(){
  this.router.navigate(['/travel/',this.customer.Group_s_code])
}
  ngOnInit() {
  }

}
