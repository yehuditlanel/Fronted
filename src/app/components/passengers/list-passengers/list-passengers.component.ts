import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-passengers',
  templateUrl: './list-passengers.component.html',
  styleUrls: ['./list-passengers.component.css']
})
export class ListPassengersComponent implements OnInit {

  constructor() { }
//   public lat: Number = 31.8174961
// public lng: Number = 35.1966627

origin =  { lat: 31.8153471, lng: 35.1910237 }
  destination ={ lat: 31.768319, lng: 35.21371 }
  waypoints = [
     {location: { lat: 31.8253471, lng: 35.1910237 }},
     {location: { lat: 31.758319, lng: 35.21371 }}
  ]
// public origin: any
// public destination: any

ngOnInit() {
  // this.getDirection()
}

// getDirection() {
//   this.origin = { lat: 31.8174961, lng: 35.1966627 }
//   this.destination = { lat: 31.8199285, lng: 35.1916783 }
// }

}
