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
  addCustomer(newCustomer:Customer)
  {
    const s=newCustomer;
    this.http.post(this.path,newCustomer).subscribe(data=>{console.log(data);})
  }
  updateCustomer(newCustomer:Customer){
    this.http.put(this.path,newCustomer).subscribe();
  }
  deleteCustomer(customer:Customer){
    this.http.delete(this.path+customer).subscribe();

  }

  delete(id: number) {
    const params = new HttpParams()
      .set('id', id.toString());
    this.http.delete(this.path,{params:params});
      
}

}
