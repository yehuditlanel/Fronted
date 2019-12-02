import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/user';
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
  this.router.navigate(['/edit',this.customer])
   // this.router.navigateByUrl(['/customers',this.customers[i]])
}
deleteCustomer(){
  alert("delete")
}
  ngOnInit() {
  }

}
