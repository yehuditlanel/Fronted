import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/classes/Customer';
import { ServerService } from 'src/app/service/server.service';
import { Router } from '@angular/router';
/////////////////////////////////////////////
//import {FormControl} from '@angular/forms';
//import {Observable} from 'rxjs';
//import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {
  customers:Customer[];
  //////////////////////////
  //myControl = new FormControl();
  //options: string[] = ['One', 'Two', 'Three',"On"];
 // filteredOptions: Observable<string[]>;
///////////////////////////////////
  constructor(private cs:ServerService,private router:Router){ 
  }
p(){
  console.log(this.customers);
}
  ngOnInit() {
    this.customers=[];
    this.cs.byGet("Customer").subscribe(data => {
    this.customers=data;
    console.log(this.customers);
  });
  }

  // ngOnInit() {
  //   this.filteredOptions = this.myControl.valueChanges
  //     .pipe(
  //       startWith(''),
  //       map(value => this._filter(value))
  //     );
  // }
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();
  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }
  onCustomerAdded(data:Customer){
    this.customers.push(new Customer(data.Conected_name,data.Conected_phone,data.Group_s_code,data.Group_s_name));
  }
}