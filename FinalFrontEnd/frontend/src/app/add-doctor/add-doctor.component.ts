import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  doctor:Doctor=new Doctor();
  doctor1: Doctor[]|any;

  constructor(private patientService:PatientService,private doctorService:DoctorService,
    private router:Router) { }

  ngOnInit(): void {
    this.getDoctor();
  }
  getDoctor()
  {
    this.doctorService.getDoctorList().subscribe((data:any)=>{this.doctor1=data});
  }
  saveDoctor(){
    this.doctorService.createDoctor(this.doctor).subscribe((data:any)=>{console.log(data)},
    (error:any)=>console.log(error));
  }
  goToDoctorlist()
  {
    this.router.navigate(['/doctors'])
  }
  onSubmit()
  {
    console.log(this.doctor)
    this.saveDoctor();
    this.goToDoctorlist()
  }

}
