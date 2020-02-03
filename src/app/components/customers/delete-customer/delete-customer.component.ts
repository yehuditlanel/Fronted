// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-delete-customer',
//   templateUrl: './delete-customer.component.html',
//   styleUrls: ['./delete-customer.component.css']
// })
// export class DeleteCustomerComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/classes/Customer';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

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
  cancel(){
    this.router.navigate(['/customers']);
  }
  onSubmitForm(){
    ////need to send identity because eed know what to delete
    this.server.deleteObjectByNumber("Customer",this.customer.Group_s_code);
     //this.server.deleteObject("Customer",(this.customer.Group_s_code);
      //this.router.navigate(['/customers']);
   
  }

}
