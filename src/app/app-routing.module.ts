import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriverComponent } from './components/driver/driver.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { TravelComponent } from './components/travel/travel.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { AllCustomersComponent } from './components/customers/all-customers/all-customers.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';

const routes: Routes = [
  { path: '', component:  LoginComponent},
  { path: 'drivers', component:  DriversComponent},
  { path: 'driver/:name', component: DriverComponent },
  { path: 'customers', component:  AllCustomersComponent,children:[
    {  path: ':id', component:  EditCustomerComponent},

  ]},
  { path: 'edit',component:EditCustomerComponent,children:[
    {path:':id',component:EditCustomerComponent},
  ]},
  //{path:'allCustomer/:id',component:AllCustomersComponent},
  {path:'vehicles',component:VehiclesComponent},
  { path: 'travel', component:  TravelComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
