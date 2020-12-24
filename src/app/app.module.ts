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
import { CustomerComponent } from './components/customers/customer/customer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatSliderModule,
  MatAutocompleteModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatTooltipModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatExpansionModule,
  MatDividerModule,
  MatCheckboxModule,
  MatDialogModule,
  MatDatepickerModule, 
  MatNativeDateModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatRippleModule,
} from '@angular/material';
import { AddTravelComponent } from './components/travels/add-travel/add-travel.component';
import { EditTravelComponent } from './components/travels/edit-travel/edit-travel.component';
import { AllTravelsComponent } from './components/travels/all-travels/all-travels.component';
import { DeleteTravelComponent } from './components/travels/delete-travel/delete-travel.component';
import { AddVehicleComponent } from './components/vehicles/add-vehicle/add-vehicle.component';
import { AllVehicleComponent } from './components/vehicles/all-vehicle/all-vehicle.component';
import { DeleteVehicleComponent } from './components/vehicles/delete-vehicle/delete-vehicle.component';
import { DetailVehicleComponent } from './components/vehicles/detail-vehicle/detail-vehicle.component';
import { EditVehicleComponent } from './components/vehicles/edit-vehicle/edit-vehicle.component';
import { ListVehicleComponent } from './components/vehicles/list-vehicle/list-vehicle.component';
import { ListPassengersComponent } from './components/passengers/list-passengers/list-passengers.component';
import { AllPassengersComponent } from './components/passengers/all-passengers/all-passengers.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { TrackComponent } from './components/track/track.component'
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { PassengersComponent } from './components/passengers/passengers/passengers.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { ViewMapComponent } from './components/passengers/view-map/view-map.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Track2Component } from './components/track2/track2.component';
@NgModule({
  declarations: [
    AppComponent,
    change,
    phonedirective,
    FilterPipe,
    ShortStrPipe,
    LoginComponent,
    DriverComponent,
    CustomerComponent,
    PageNotFoundComponent,
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
    AddTravelComponent,
    EditTravelComponent,
    AllTravelsComponent,
    DeleteTravelComponent,
    AddVehicleComponent,
    AllVehicleComponent,
    DeleteVehicleComponent,
    DetailVehicleComponent,
    EditVehicleComponent,
    ListVehicleComponent,
    ListPassengersComponent,
    AllPassengersComponent,
    TrackComponent,
    HomeComponent,
    PassengersComponent,
    OnlyNumberDirective,
    ViewMapComponent,
    Track2Component,
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,HttpClientModule,
    MatSliderModule,MatIconModule,ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,MatTableModule,MatSortModule,
    MatButtonModule,MatSelectModule,MatProgressSpinnerModule,MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatRippleModule,
    AgmCoreModule,
    MatTooltipModule,
    AgmDirectionModule,
    AgmCoreModule.forRoot({
      apiKey:'insert your api key',
      libraries: ["places"]}) 
  ],
  providers: [ServerService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
