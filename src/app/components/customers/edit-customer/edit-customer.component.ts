import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'src/app/classes/Customer';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private cs:ServerService) {}
customer:Customer=new Customer("vv","vv","vvv","vv");


  ngOnInit() {
    console.log(this.route.params);
    this.route.params.subscribe(
      params=>{
        this.customer.Conected_name=params.Conected_name
        this.customer.Conected_phone=params.Conected_phone
        this.customer.Group_s_code=params.Group_s_code
        this.customer.Group_s_name=params.Group_s_name
        console.log(this.customer);
      }
    )
    console.log(this.customer);
  }
  onSubmitForm(){
    this.cs.updateObject("Customer",this.customer);
       this.router.navigate(['/customers']);
   
  }
  cancel(){
    this.router.navigate(['/customers']);
  }

}
