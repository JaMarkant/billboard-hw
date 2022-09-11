import { fakeAsync, TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { Employee } from "./employee";

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });
    service = TestBed.inject(EmployeeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send GET request to api/employees', fakeAsync(() => {
    service.getEmployees().subscribe();
    const req = httpTestingController.expectOne('api/employees');
    expect(req.request.method).toEqual('GET');
  }));

  it('should send PUT request to api/employees', fakeAsync(() => {
    let employee = new Employee(1, 'jachym', 'markant', 'developer', new Date());
    service.updateEmployee(employee).subscribe();
    const req = httpTestingController.expectOne('api/employees');
    expect(req.request.method).toEqual('PUT');
  }));

  it('should send POST request to api/employees', fakeAsync(() => {
    service.addEmployee({
      name: 'Jachym',
      surname: 'Markant',
      position: 'front-end developer',
      birthday: new Date()
    }).subscribe();
    const req = httpTestingController.expectOne('api/employees');
    expect(req.request.method).toEqual('POST');
  }));

  it('should send GET request to api/employees/id', fakeAsync(() => {
    service.getEmployee(1).subscribe();
    const req = httpTestingController.expectOne('api/employees/1');
    expect(req.request.method).toEqual('GET');
  }));

  it('should send DELETE request to api/employees/id', fakeAsync(() => {
    service.deleteEmployee(1).subscribe();
    const req = httpTestingController.expectOne('api/employees/1');
    expect(req.request.method).toEqual('DELETE');
  }));
});
