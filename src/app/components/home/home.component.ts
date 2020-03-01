// import { Component } from '@angular/core';
// import { first } from 'rxjs/operators';
// import { User } from '@app/classes/User';
// import { ServerService } from '@app/service/server.service';
// import { AuthenticationService } from '@app/service/authentication.service';



// @Component({ templateUrl: 'home.component.html' })
// export class HomeComponent {
//     loading = false;
//     currentUser: User;
//     userFromApi: User;

//     constructor(
//         private userService: ServerService,
//         private authenticationService: AuthenticationService
//     ) {
//         this.currentUser = this.authenticationService.currentUserValue;
//     }

//     ngOnInit() {
//       // this.userFromApi=new User( "",null,null,null,null);
//         this.loading = true;
//         this.userService.getById("User",this.currentUser.UserId).subscribe(data=>{
//           console.log(data)
//         })
//         // this.userService.getById("User",this.currentUser.UserId).pipe(first()).subscribe(user => {
//         //     this.loading = false;
//         //     this.userFromApi = user;
//         // });
//     }
// }