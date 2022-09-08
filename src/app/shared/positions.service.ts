import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from "rxjs";
import { Positions } from "./positions";

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  private positionsUrl = 'https://ibillboard.com/api/positions';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getPositions(): Observable<Positions> {
    return this.httpClient.get<Positions>(this.positionsUrl);
  }
}
