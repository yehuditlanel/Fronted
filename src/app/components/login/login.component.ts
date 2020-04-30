import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/classes/User';
import { Router, RouterLink } from '@angular/router';
import { Role } from 'src/app/classes/Role';
import { ServerService } from 'src/app/service/server.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShowErrText=false;
  errText="";
  myUser:User;
  hide = true;
  userFromDB:User;
  @ViewChild("loginForm",{static:true}) form:NgForm;
  constructor(private route:Router,private ls:ServerService) {
    this.myUser= new User("",null,"","",null);
   }

  ngOnInit() {
  }
  onSubmitForm(form:NgForm){
    if (this.form.invalid) {
      alert("the form is invalid!!!");
      return;
    }
    this.ls.getObjectById("User",this.myUser.UserId,this.myUser.NameOfUser).subscribe(data=>{
      this.userFromDB=data;
      console.log(this.userFromDB)
      this.f();
    })
  }
f(){
  if(this.userFromDB!=null){
    if(this.userFromDB.Role==Role.Driver)
    {
      localStorage.setItem("currentUser",this.userFromDB.UserId.toString())
      this.route.navigate(['track',this.userFromDB.UserId]);
    }
    else{
      if(this.userFromDB.Role==Role.Admin||this.userFromDB.Role==Role.Secretary)
      {
        this.route.navigate(['travels'])
      }
    }
  }
  else{
    this.errText="    שם משתמש או סיסמה שגויים, בבקשה נסה שוב.    "
    this.isShowErrText=true
    this.form.reset();
  }
    
}
}