import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  doc: any;
  outputdoc:any;

  docotordemo: Doctor[] | any;

  constructor(private docotorService: DoctorService) { }

  ngOnInit(): void {
    this.getAlldoctor();
  }
  onSub() {
    this.getdoctorbyname();
    console.log(this.doc);

  }
  getAlldoctor() {
    this.docotorService.getDoctorList().subscribe((data: any) => { this.docotordemo = data });
  }
  getdoctorbyname() {
    this.docotorService.getDoctorByName(this.doc).subscribe((data: any) => { this.outputdoc = data });
  }

}
