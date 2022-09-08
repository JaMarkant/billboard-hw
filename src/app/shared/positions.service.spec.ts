import { TestBed } from '@angular/core/testing';

import { PositionsService } from './positions.service';
import {HttpClientModule} from "@angular/common/http";
import {Positions} from "./positions";

describe('PositionsService', () => {
  let service: PositionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(PositionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const expectedPositions: Positions = {
    positions:
      [
        "full-stack developer", "front-end developer", "sw admin", "help desk", "scrum master", "product manager"
      ]
  };

  it('should return expected positions (HttpClient called once)',
    (done: DoneFn) => {
      service.getPositions().subscribe(positions => {
        expect(positions)
          .withContext('expected positions')
          .toEqual(expectedPositions);
        done();
      });
    });
});
