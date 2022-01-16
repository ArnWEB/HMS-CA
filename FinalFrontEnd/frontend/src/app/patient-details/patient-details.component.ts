import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  paitentdemo: Patient = new Patient();
  Error: String | any;

  constructor(private patientService: PatientService, private doctorse: DoctorService) { }

  ngOnInit(): void {

  }
  onClick() {
    console.log(this.paitentdemo.id);
    this.getPaitentByID();
    console.log(this.paitentdemo);
  }
  getPaitentByID() {
    this.patientService.getPatientbyId(this.paitentdemo.id).subscribe((data: any) => {
      if (data) {
        this.paitentdemo = data;
      }
      else {
        this.paitentdemo.name = "No Such Patient there in Database";
        this.paitentdemo.visitedDoctor = "NA"; this.paitentdemo.date = "NA";
      }
    });
  }
  getDoctorbyName() {
    this.doctorse.getDoctorByName("Arnab Kundu").subscribe((data: any) => { this.paitentdemo = data });
  }

}
