import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Vehicle } from '../classes/Vehicle';
@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  
  path="http://localhost:55750/api/Vehicle";
  constructor(private http: HttpClient) {}
  
  // getVehicles(): Observable<Vehicle[]> {
  //   console.log(this.http.get<Vehicle[]>(this.path));
  //   return this.http.get<Vehicle[]>(this.path);
  // }
}
