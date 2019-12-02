import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { change }from './directives/changinput.directives';
import { phonedirective } from './directives/phonemaskdirective';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortStrPipe } from './pipes/short-str.pipe';
import { LoginComponent } from './components/login/login.component';
import { DriverComponent } from './components/driver/driver.component';
import { TravelComponent } from './components/travel/travel.component';
//import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customers/customer/customer.component';
import { DriversComponent } from './components/drivers/drivers.component';
import { DriverFormComponent } from './components/driver-form/driver-form.component';
import { DriversListComponent } from './components/drivers-list/drivers-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { ServerService } from './service/server.service';
import { AllCustomersComponent } from './components/customers/all-customers/all-customers.component';
import { AddCustomerComponent } from './components/customers/add-customer/add-customer.component';
import { DetialCustomerComponent } from './components/customers/detial-customer/detial-customer.component';
import { EditCustomerComponent } from './components/customers/edit-customer/edit-customer.component';
import { DeleteCustomerComponent } from './components/customers/delete-customer/delete-customer.component';
import { ListCustomersComponent } from './components/customers/list-customers/list-customers.component';
@NgModule({
  declarations: [
    AppComponent,
    change,
    phonedirective,
    FilterPipe,
    ShortStrPipe,
    LoginComponent,
    DriverComponent,
    TravelComponent,
    CustomerComponent,
    DriversComponent,
    DriverFormComponent,
    DriversListComponent,
    PageNotFoundComponent,
   VehiclesComponent,
    VehicleFormComponent,
    AllCustomersComponent,
    AddCustomerComponent,
    DetialCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent,
    ListCustomersComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
