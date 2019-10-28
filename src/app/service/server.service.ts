import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private server:HttpClient) { }
  byGet(url:string,sucsessFunc,errFunc){
    this.server.get(url).subscribe(
      data=>sucsessFunc(data),
      error=>errFunc(error)
    )
  }
}
