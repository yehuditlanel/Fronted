import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/classes/Customer';
import { ServerService } from 'src/app/service/server.service';
import { User } from 'src/app/classes/User';
import { Role } from '@app/classes/Role';

@Component({
    selector: 'app-delete-driver',
    templateUrl: './delete-driver.component.html',
    styleUrls: ['./delete-driver.component.css']
  })
  export class DeleteDriverComponent implements OnInit {

  constructor(private server:ServerService,private route:ActivatedRoute,private router:Router) {}
driver:User=new User("",null,"","",Role.Driver);


  ngOnInit() {
    this.route.params.subscribe(
      params=>{
        this.driver.AddressOfUser=params.AddressOfUser
        this.driver.NameOfUser=params.NameOfUser
        this.driver.Role=params.Role
        this.driver.PhoneOfUser=params.PhoneOfUser
        this.driver.UserId=params.UserId
      }
    )
  }
  cancel(){
    this.router.navigate(['/drivers']);
  }
  onSubmitForm(){
    this.server.deleteObject("User",this.driver.UserId.toString());
    this.router.navigate(['/drivers']);
  }
}