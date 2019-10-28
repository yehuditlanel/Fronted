import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../classes/Customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  path="http://localhost:55750/api/Customer";
  constructor(private http: HttpClient) {}
  
  getCustomer(): Observable<Customer[]> {
    //console.log(this.http.get<Customer[]>(this.path));
    return this.http.get<Customer[]>(this.path);
  }

}
