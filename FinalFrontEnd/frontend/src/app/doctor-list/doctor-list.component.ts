import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[]|any;

  constructor(private doctorService:DoctorService ) { }

  ngOnInit(): void {
    this.getDoctor();
    
  }
  getDoctor()
  {
    this.doctorService.getDoctorList().subscribe((data:any)=>{this.doctors=data});
  }

}
