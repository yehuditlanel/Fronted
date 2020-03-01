import { Component, OnInit } from '@angular/core';
import { Passenger } from 'src/app/classes/Passenger';
import { ServerService } from 'src/app/service/server.service';
import { ActivatedRoute } from '@angular/router';
import { marker } from 'src/app/classes/marker';
import {Observable} from 'rxjs'

@Component({
  selector: 'app-all-passengers',
  templateUrl: './all-passengers.component.html',
  styleUrls: ['./all-passengers.component.css']
})

export class AllPassengersComponent implements OnInit {
  trackCode:number;
  passengers:Passenger[];
  markers: marker[] = [{lat: 31.819721,lng:35.189881,label: 'A',draggable: true}]
  latitude = 31.819721;
  longitude = 35.189881;
  zoom:number = 15; 
  addresses:Array<string>; 
  result:any;
  constructor(private ps:ServerService,private route:ActivatedRoute) {
   }
  ngOnInit() {
    this.addresses=[];
    this.route.params.subscribe(params=>
      this.trackCode=params.id)
    this.ps.getByParmater1("Passenger",this.trackCode).subscribe(data=>{
      this.passengers=data;
      for(var i = 0; i < this.passengers.length; i++) {
        this.addresses.push(this.passengers[i].PassengerAddress);
        this.findLocation(this.passengers[i].PassengerAddress);
      }
      console.log(this.addresses);
    console.log(this.passengers);});   
  }
  // הפונקציה שמקבלת את הכתובת ושולחת לסרביס
  findLocation(address:string): void {
    var addressToSend = address.split(' ').join('+');// מחליפה את הרווחים ב +
    console.log(addressToSend)
    this.ps.getLocation(addressToSend)
    .subscribe(res => {
        this.result = res.results[0].geometry.location; // הגישה לנקודות ציון
      // שינוי התצוגה לנקודות ציון שחזרו - שנוכל לראות אותם
      this.latitude = this.result.lat;
      this.longitude = this.result.lng;
      console.log(this.result);
      //יצירת מארקר חדש והוספה שלו לרשימת המארקרים
      var newMarker: marker = {
        lat: this.result.lat,
		    lng: this.result.lng,
		    label: this.result.location,
		    draggable: true
      }
      this.markers.push(newMarker);
      // הצגת הנקודות
      this.result = JSON.stringify(this.result);
      });
}
}