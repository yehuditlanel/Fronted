import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriverComponent } from './components/driver/driver.component';
import { CustomerComponent } from './components/customer/customer.component';
import { TravelComponent } from './components/travel/travel.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

const routes: Routes = [
  { path: '', component:  LoginComponent},
  { path: 'drivers', component:  DriversComponent},
  { path: 'driver/:name', component: DriverComponent },
  { path: 'customer', component:  CustomerComponent},
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
