import { Component, OnInit, Output ,EventEmitter, ViewChild} from '@angular/core';
  
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';
import { Customer } from 'src/app/classes/Customer';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from 'src/app/service/server.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
@Output() addCustomer=new  EventEmitter<Customer>();
@ViewChild ("customerForm")form:NgForm;
newCustomer:Customer;
constructor(private cs:ServerService) { this.newCustomer= new Customer("","","",""); }
  onSubmitForm(form:NgForm){
    this.addCustomer.emit(this.newCustomer);
    this.cs.addObject("Customer",this.newCustomer);
    this.form.reset();
  }

  ngOnInit() {
  }
  
}

