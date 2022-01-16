import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  public baseURL = "http://localhost:8081/api/v1/doctors"

  constructor(private httpClient: HttpClient) { }
  getDoctorList(): Observable<Doctor[]> {
    return this.httpClient.get<Doctor[]>(`${this.baseURL}`);

  }
  createDoctor(patient: Doctor): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, patient)
  }
  public getDoctorByName(name: String){
    return this.httpClient.get("http://localhost:8081/api/v1/doctors/"+name);

  }
}
