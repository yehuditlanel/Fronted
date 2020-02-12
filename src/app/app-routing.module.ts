import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DriverComponent } from './components/driver/driver.component';
import { AllCustomersComponent } from './components/customers/all-customers/all-customers.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';
import { AllDriversComponent } from './components/drivers/all-drivers/all-drivers.component';
import { EditDriverComponent } from './components/drivers/edit-driver/edit-driver.component';
import { DeleteCustomerComponent } from './components/customers/delete-customer/delete-customer.component';
import { DeleteDriverComponent } from './components/drivers/delete-driver/delete-driver.component';
import { AllTravelsComponent } from './components/travels/all-travels/all-travels.component';
import { AllVehicleComponent } from './components/vehicles/all-vehicle/all-vehicle.component';
import { DeleteVehicleComponent } from './components/vehicles/delete-vehicle/delete-vehicle.component';
import { EditVehicleComponent } from './components/vehicles/edit-vehicle/edit-vehicle.component';
import { AllPassengersComponent } from './components/passengers/all-passengers/all-passengers.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './classes/Role';

const routes: Routes = [
  
  { path: 'login', component:  LoginComponent},

  { 
    path: 'driver/:name', component: DriverComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },

  { 
    path: 'customers', component:  AllCustomersComponent,children:[
    {  path: ':id', component:  EditCustomerComponent},
  ],
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
},

  {
     path: 'edit',component:EditCustomerComponent,children:[
    {path:':id',component:EditCustomerComponent},
  ],
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] 
    }
},

  { 
    path: 'delete',component:DeleteCustomerComponent,children:[
    {path:':id',component:DeleteCustomerComponent},
  ],
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
},
  { 
    path: 'drivers', component:  AllDriversComponent,children:[
    {  path: ':id', component:  EditDriverComponent},
  ],
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},
  { 
    path: 'editDriver',component:EditDriverComponent,children:[
    {path:':id',component:EditDriverComponent},
  ],
  canActivate: [AuthGuard],
  data: { roles: [Role.Admin] }
},

  { 
    path: 'deleteDriver',component:DeleteDriverComponent,children:[
    {path:':id',component:DeleteDriverComponent},
  ],
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
},

  {
    path:'vehicles',component:AllVehicleComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },

  {
     path: 'editVehicle',component:EditVehicleComponent,children:[
    {path:':id',component:EditVehicleComponent},
  ],
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
},

  {
     path: 'deleteVehicle',component:DeleteVehicleComponent,children:[
    {path:':id',component:DeleteVehicleComponent},
  ],
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },

  {
    path:'viewP/:id',component:AllPassengersComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },

  { 
    path: 'travel', component:  AllTravelsComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },

  {
    path: 'not-found', component: PageNotFoundComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  
  {
    path: '**', redirectTo: '/not-found',
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
