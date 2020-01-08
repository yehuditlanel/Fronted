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

const routes: Routes = [
  { path: '', component:  LoginComponent},
  { path: 'driver/:name', component: DriverComponent },
  { path: 'customers', component:  AllCustomersComponent,children:[
    {  path: ':id', component:  EditCustomerComponent},
  ]},
  { path: 'edit',component:EditCustomerComponent,children:[
    {path:':id',component:EditCustomerComponent},
  ]},
  { path: 'delete',component:DeleteCustomerComponent,children:[
    {path:':id',component:DeleteCustomerComponent},
  ]},
  { path: 'drivers', component:  AllDriversComponent,children:[
    {  path: ':id', component:  EditDriverComponent},
  ]},
  { path: 'editDriver',component:EditDriverComponent,children:[
    {path:':id',component:EditDriverComponent},
  ]},
  { path: 'deleteDriver',component:DeleteDriverComponent,children:[
    {path:':id',component:DeleteDriverComponent},
  ]},
  {path:'vehicles',component:AllVehicleComponent},
  { path: 'editVehicle',component:EditVehicleComponent,children:[
    {path:':id',component:EditVehicleComponent},
  ]},
  { path: 'deleteVehicle',component:DeleteVehicleComponent,children:[
    {path:':id',component:DeleteVehicleComponent},
  ]},
  { path: 'travel', component:  AllTravelsComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
