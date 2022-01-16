import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patient:Patient=new Patient();
  doctor: Doctor[]|any;

  constructor(private patientService:PatientService,private doctorService:DoctorService,
    private router:Router) { }

  ngOnInit(): void {
    this.getDoctor();
  }
  getDoctor()
  {
    this.doctorService.getDoctorList().subscribe((data:any)=>{this.doctor=data});
  }
  savePatient(){
    this.patientService.createPatient(this.patient).subscribe((data:any)=>{console.log(data)},
    (error:any)=>console.log(error));
  }
  goToPatientlist()
  {
    this.router.navigate(['/patients'])
  }
  onSubmit()
  {
    console.log(this.patient)
    this.savePatient();
    this.goToPatientlist()
  }
  public name="Arnab";

}
