import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/User';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from 'src/app/service/server.service';
import { Role } from '@app/classes/Role';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {
  driver:User
  constructor(private route:ActivatedRoute,private router:Router,private ds:ServerService) {
    this.driver=new User("",null,"","",Role.Driver);

  }

  ngOnInit() {
    console.log(this.route.params);
    this.route.params.subscribe(
      params=>{
        this.driver.AddressOfUser=params.AddressOfUser
        this.driver.NameOfUser=params.NameOfUser
        this.driver.Role=params.Role
        this.driver.PhoneOfUser=params.PhoneOfUser
        this.driver.UserId=params.UserId
      }
    )
    console.log(this.driver);
  }
  onSubmitForm(){
    this.ds.updateObject("User",this.driver);
       this.router.navigate(['/drivers']);
   
  }
  cancel(){
    this.router.navigate(['/drivers']);
  }
}
