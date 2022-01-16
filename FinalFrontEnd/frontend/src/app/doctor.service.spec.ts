import { TestBed } from '@angular/core/testing';
import { from } from 'rxjs';

import { DoctorService } from './doctor.service';
import{HttpClientTestingModule,HttpTestingController} from '@angular/common/http/testing'
import { Doctor } from './doctor';

describe('DoctorService', () => {
  let service: DoctorService;
  let httpcontroller:HttpTestingController;

  beforeEach(() => 
    TestBed.configureTestingModule({imports:[HttpClientTestingModule],providers:[DoctorService]})
  );
  beforeEach(()=>
    {
      service=TestBed.get(DoctorService);
      httpcontroller=TestBed.get(HttpTestingController)
    }
  );
  afterEach(()=>
  {
    httpcontroller.verify();
  })

  it('DocotorlistTest', () => {
    const doctor:Doctor[]=[{id:1,name:"Arnab",age:32,gender:"Male",field:"gyno"}];
    service.getDoctorList().subscribe((doctors)=>{expect(doctor).toBe(doctors,'should ceheck mock data');
  });
  const req=httpcontroller.expectOne(service.baseURL);
  expect(req.cancelled).toBeFalsy;
  expect(req.request.responseType).toEqual('json');
  req.flush(doctor);
  });

  it('createDoctorTest', () => {
    const doctor:Doctor={id:1,name:"Arnab",age:32,gender:"Male",field:"gyno"};
    service.createDoctor(doctor).subscribe((doctors)=>{expect(doctors).toBe(doctor);
  });
  const req=httpcontroller.expectOne(service.baseURL);
  expect(req.cancelled).toBeFalsy;
  expect(req.request.responseType).toEqual('json');
  req.flush(doctor);
  });
  it('getdetailsbyName', () => {
    const doctor:Doctor={id:1,name:"Arnab",age:32,gender:"Male",field:"gyno"};
    service.getDoctorByName("Arnab").subscribe((doctors)=>{expect(doctors).toBe(doctor);
  });
  const req=httpcontroller.expectOne(service.baseURL+"/Arnab");
  expect(req.cancelled).toBeFalsy;
  expect(req.request.responseType).toEqual('json');
  req.flush(doctor);
  });

});
