import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  path="http://localhost:55750/api/";
  constructor(private server:HttpClient) {
    }
  API_KEY = "AIzaSyCtdh-zFkVW7MUgWFvm9mfUTp4BA0Zd8qw";
  getLocation(address: string): Observable<any> {
    return this.server.get("https://maps.googleapis.com/maps/api/geocode/json?address="
    +address+"&key="+ this.API_KEY
    );
}
  getByParmater(url:string,p:number){
    return this.server.get<any[]>(this.path+url+'?'+"travelCode="+p);
  }
  getByParmater1(url:string,p:number){
    return this.server.get<any[]>(this.path+url+'?'+"trackCode="+p);
  }
  getObjectById(url:string,id:number,nameOfUser:string){
    return this.server.get<any>(this.path+url+'?'+"id="+id+"&"+"nameOfUser="+nameOfUser);
  }
  byGet(url:string):Observable<any[]>{
    return this.server.get<any[]>(this.path+url);
  }
  addObject(url:string,object:any){
    this.server.post(this.path+url,object).subscribe();
  }
  deleteObject(url:string, id:string){
    this.server.delete(this.path+url+'/'+id).subscribe();
  }
  deleteObjectByNumber(url:string, id:number){
    this.server.delete(this.path+url+'/'+id).subscribe();
  }
  updateObject(url:string,object:any){
      this.server.put(this.path+url,object).subscribe();
    }
  getTrackByUserId(url:string,userId:number){
    return this.server.get<any[]>(this.path+url+'/GetTrackByDriverId?userId='+userId)
  }
}