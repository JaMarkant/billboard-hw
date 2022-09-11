import { fakeAsync, TestBed } from '@angular/core/testing';

import { PositionsService } from './positions.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('PositionsService', () => {
  let service: PositionsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PositionsService]
    });
    service = TestBed.inject(PositionsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send GET request to https://ibillboard.com/api/positions', fakeAsync(() => {
    service.getPositions().subscribe();
    const req = httpTestingController.expectOne('https://ibillboard.com/api/positions');
    expect(req.request.method).toEqual('GET');
  }));
});
