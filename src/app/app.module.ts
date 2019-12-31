import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { change }from './directives/changinput.directives';
import { phonedirective } from './directives/phonemaskdirective';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortStrPipe } from './pipes/short-str.pipe';
import { LoginComponent } from './components/login/login.component';
import { DriverComponent } from './components/driver/driver.component';
import { TravelComponent } from './components/travel/travel.component';
import { CustomerComponent } from './components/customers/customer/customer.component';
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
import { AddDriverComponent } from './components/drivers/add-driver/add-driver.component';
import { AllDriversComponent } from './components/drivers/all-drivers/all-drivers.component';
import { DeleteDriverComponent } from './components/drivers/delete-driver/delete-driver.component';
import { DetialDriverComponent } from './components/drivers/detial-driver/detial-driver.component';
import { EditDriverComponent } from './components/drivers/edit-driver/edit-driver.component';
import { ListDriversComponent } from './components/drivers/list-drivers/list-drivers.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatRippleModule } from '@angular/material';
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
    PageNotFoundComponent,
   VehiclesComponent,
    VehicleFormComponent,
    AllCustomersComponent,
    AddCustomerComponent,
    DetialCustomerComponent,
    EditCustomerComponent,
    DeleteCustomerComponent,
    ListCustomersComponent,
    AddDriverComponent,
    AllDriversComponent,
    DeleteDriverComponent,
    DetialDriverComponent,
    EditDriverComponent,
    ListDriversComponent,
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule,
    MatSliderModule,MatIconModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
