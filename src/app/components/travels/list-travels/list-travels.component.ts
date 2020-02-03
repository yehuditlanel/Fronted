import { Component, OnInit, Input } from '@angular/core';
import { Travel } from 'src/app/classes/Travel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-travels',
  templateUrl: './list-travels.component.html',
  styleUrls: ['./list-travels.component.css']
})
export class ListTravelsComponent implements OnInit {

  @Input()travel:Travel;
  constructor(private router:Router) { }
OnMouseOver(id:string)
{
  alert(id);
  alert("MouseOver");
  alert(this.travel.TravelCode);
  
 //this.router.navigate(['/track',id]);


}
  ngOnInit() {
  }

}
