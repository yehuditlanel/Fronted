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
import { AddTravelComponent } from './components/travels/add-travel/add-travel.component';
import { DetialCustomerComponent } from './components/customers/detial-customer/detial-customer.component';
import { DetailVehicleComponent } from './components/vehicles/detail-vehicle/detail-vehicle.component';
import { TrackComponent } from './components/track/track.component';
import { HomeComponent } from './components/home/home.component';
import { EditTravelComponent } from './components/travels/edit-travel/edit-travel.component';

const routes: Routes = [
  { path: 'login', component:  LoginComponent},
  { path:'',component:HomeComponent},
  { path: 'driver/:name', component: DriverComponent },
  { path: 'track/:id', component: TrackComponent },
  { path: 'customers', component:  AllCustomersComponent},
  { path: 'edit/:id',component:EditCustomerComponent},
  { path: 'delete:/id',component:DeleteCustomerComponent},
  { path: 'detailCustomer/:id',component:DetialCustomerComponent},
  { path: 'drivers', component:  AllDriversComponent},
  { path: 'editDriver/:idD',component:EditDriverComponent},
  { path: 'deleteDriver/:id',component:DeleteDriverComponent},
  {path:'vehicles',component:AllVehicleComponent},
  { path: 'editVehicle/:id',component:EditVehicleComponent},
  { path: 'deleteVehicle/:id',component:DeleteVehicleComponent},
  { path: 'detailVehicle/:id',component:DetailVehicleComponent},
  {path:'viewMap/:id',component:AllPassengersComponent},
  {path:'gg',component:AddTravelComponent},
  { path: 'travel/:id', component:  AllTravelsComponent},
  {path:'editTravel/:id',component:EditTravelComponent},
  { path: 'addTravel', component:  AddTravelComponent},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
