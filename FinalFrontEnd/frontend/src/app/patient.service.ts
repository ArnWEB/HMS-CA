import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  public baseURL = "http://localhost:8081/api/v1/patients"

  constructor(private httpClient: HttpClient) { }
  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.baseURL}`);

  }
  createPatient(patient: Patient): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, patient)
  }
  getPatientbyId(id: number): Observable<Object> {
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`);


  }
}

