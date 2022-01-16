import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Patient } from './patient';

import { PatientService } from './patient.service';

describe('PatientService', () => {
  let service: PatientService;

  let httpcontroller:HttpTestingController;

  beforeEach(() => 
    TestBed.configureTestingModule({imports:[HttpClientTestingModule],providers:[PatientService]})
  );
  beforeEach(()=>
    {
      service=TestBed.get(PatientService);
      httpcontroller=TestBed.get(HttpTestingController)
    }
  );
  afterEach(()=>
  {
    httpcontroller.verify();
  })

  it('DocotorlistTest', () => {
    const patient:Patient[]=[{id:1,name:"Arnab",visitedDoctor:32,date:"19thfeb"}];
    service.getPatientList().subscribe((patients)=>{expect(patient).toBe(patients,'should ceheck mock data');
  });
  const req=httpcontroller.expectOne(service.baseURL);
  expect(req.cancelled).toBeFalsy;
  expect(req.request.responseType).toEqual('json');
  req.flush(patient);
  });

  it('createDoctorTest', () => {
    const patient:Patient={id:1,name:"Arnab",visitedDoctor:"Sam",date:"5thjan"};
    service.createPatient(patient).subscribe((patients)=>{expect(patients).toBe(patient);
  });
  const req=httpcontroller.expectOne(service.baseURL);
  expect(req.cancelled).toBeFalsy;
  expect(req.request.responseType).toEqual('json');
  req.flush(patient);
  });
  it('getdetailsbyID', () => {
    const patient:Patient={id:1,name:"Arnab",visitedDoctor:"Sam",date:"5thjan"};
    service.getPatientbyId(1).subscribe((p)=>{expect(p).toBe(patient);
  });
  const req=httpcontroller.expectOne(service.baseURL+"/"+1);
  expect(req.cancelled).toBeFalsy;
  expect(req.request.responseType).toEqual('json');
  req.flush(patient);
  });

});
