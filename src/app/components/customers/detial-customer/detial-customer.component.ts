import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/classes/Customer';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-detial-customer',
  templateUrl: './detial-customer.component.html',
  styleUrls: ['./detial-customer.component.css']
})
export class DetialCustomerComponent implements OnInit {

  constructor(private server:ServerService,private route:ActivatedRoute,private router:Router) {}
customer:Customer=new Customer(null,"","","");


  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        this.customer.Group_s_code=params.Group_s_code
        this.customer.Conected_name=params.Conected_name
        this.customer.Conected_phone=params.Conected_phone
        this.customer.Group_s_name=params.Group_s_name
      }
    )
  }

}
