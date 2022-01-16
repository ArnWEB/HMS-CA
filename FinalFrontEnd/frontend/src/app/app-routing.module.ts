import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  {path:"patients",component: PatientListComponent},
  {path:'',redirectTo:"patients",pathMatch:"full"},
  {path:"patients-add",component:AddPatientComponent},
  {path:"patients-details",component:PatientDetailsComponent},
  {path:"doctors" ,component:DoctorListComponent},
  {path:"doctors-add",component:AddDoctorComponent},
  {path:"doctors-details",component:DoctorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
