import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {
  driver:User=new User("",null,"","",null);
  constructor(private route:ActivatedRoute,private router:Router) {}

  ngOnInit() {
    console.log(this.route.params);
    this.route.params.subscribe(
      params=>{
        this.driver.AddressOfUser=params.addressOfUser
        this.driver.NameOfUser=params.nameOfUser
        this.driver.Permition=params.permition
        this.driver.PhoneOfUser=params.phoneOfUser
        this.driver.UsersId=params.userId
        console.log(this.driver);
      }
    )
    console.log(this.driver);
  }
  onSubmitForm(){
       this.router.navigate(['/drivers']);
   
  }
  cancel(){
    this.router.navigate(['/drivers']);
  }
}
