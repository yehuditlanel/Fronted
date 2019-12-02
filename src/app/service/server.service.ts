import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../classes/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  path="http://localhost:55750/api/";
  constructor(private server:HttpClient) { }
  byGet(url:string):Observable<any[]>{
    return this.server.get<any[]>(url);
  }
  addObject(url:string,object:any){
    this.server.post(url,object).subscribe();
  }
  deleteObject(url:string, id:number){
    this.server.delete(url+'/'+id).subscribe();
  }
}
