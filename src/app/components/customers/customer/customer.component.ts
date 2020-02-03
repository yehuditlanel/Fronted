import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/classes/Customer';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent{
  customers:Customer[]=[];
  newCostumer:Customer;
// constructor(private cs:CustomerService){
  constructor(private cs:ServerService){
  //this.customers.push(new Customer("1","chaim","0533139132","seminar"));
}
ngOnInit() {

  this.cs.byGet("Customer").subscribe(data => {
    this.customers=data;
    console.log(this.customers);
  });
  
}
}



 