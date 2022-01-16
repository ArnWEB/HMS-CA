import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {
  HttpClientModule
} from '@angular/common/http';
import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { FormsModule } from '@angular/forms';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component'


@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    AddPatientComponent,
    PatientDetailsComponent,
    DoctorListComponent,
    AddDoctorComponent,
    DoctorDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
