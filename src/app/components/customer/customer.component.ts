import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/classes/Customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent{
  customers:Customer[]=[];
constructor(private cs:CustomerService){
}

p(){
  console.log(this.customers);
}
ngOnInit() {
  this.cs.getCustomer().subscribe(data => {
    this.customers = data;
    console.log(this.customers);
  });
  
}
}



 