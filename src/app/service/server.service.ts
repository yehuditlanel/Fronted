import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Customer } from '../classes/Customer';
import { Observable } from 'rxjs';
import { User } from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  users:User;
  path="http://localhost:55750/api/";
  constructor(private server:HttpClient) { }
  byGet(url:string):Observable<any[]>{
    return this.server.get<any[]>(this.path+url);
  }
  addObject(url:string,object:any){
    this.server.post(this.path+url,object).subscribe();
  }
  deleteObject(url:string, id:string){
    this.server.delete(this.path+url+'/'+id).subscribe();
  }
  updateObject(url:string,object:any){
      this.server.put(this.path+url,object).subscribe();
    }
    addObj(url:string,object:any){
      
     this.users=new User("aaa",1,"bbb","cc","Admin");
      this.server.post(this.path+url,this.users).subscribe();
    } 
}