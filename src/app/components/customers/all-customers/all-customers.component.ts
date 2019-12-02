import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/classes/Customer';
import { ServerService } from 'src/app/service/server.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {
  customers:Customer[];
  
  constructor(private cs:ServerService,private router:Router){ 
    //this.customers.push(new Customer("1","chaim","0533139132","seminar"));
  }
p(){
  console.log(this.customers);
}
  ngOnInit() {
    this.customers=[];
    this.cs.byGet("http://localhost:55750/api/Customer").subscribe(data => {
    this.customers=data;
    console.log(this.customers);
  });
  }
  // updateCustomer(i:string){
  //   this.router.navigate(['/edit',this.customers[i]])
  //    // this.router.navigateByUrl(['/customers',this.customers[i]])
  // }
  onCustomerAdded(data:Customer){
    this.customers.push(new Customer(data.Group_s_code,data.Conected_name,data.Conected_phone,data.Group_s_name));
  }
}
