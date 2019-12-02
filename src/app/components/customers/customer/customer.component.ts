import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/classes/Customer';
import { CustomerService } from 'src/app/service/customer.service';
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
  this.newCostumer=new Customer("2222","moti","0533132123","fff");
  // this.cs.updateCustomer(this.newCostumer);
  // this.cs.addObject("http://localhost:55750/api/Customer",this.newCostumer);
  // this.cs.deleteObject("http://localhost:55750/api/Customer",2222);
  //this.cs.addCustomer(this.newCostumer);
  this.cs.byGet("http://localhost:55750/api/Customer").subscribe(data => {
    this.customers=data;
    console.log(this.customers);
  });
  
}
}



 