import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isShowErrText=false;
  errText="";
  myUser:User;
  @ViewChild("loginForm") form:NgForm;
  constructor(private route:Router) {
    this.myUser= new User("",0,"","",0);
   }

  ngOnInit() {
  }
  onSubmitForm(form:NgForm){
    if (this.form.invalid) {
      alert("the form is invalid!!!");
      return;
    }
    //הפעלת פונקציה שתבדוק נכונות השם והסיסמה
  //response.//בודק האם חזר תשובה נכונה או שגיאה
  this.isShowErrText=true;
  if(this.isShowErrText!=true)
    this.errText="the name/password is invalid";
    else
    {
      this.errText="go to next page";
      this.route.navigate(['driver',this.myUser.NameOfUser]);
    }
    this.form.reset();
    //...
  }

}



