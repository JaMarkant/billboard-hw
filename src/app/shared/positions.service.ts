import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from "rxjs";
import {Positions} from "../../positions";

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
    let positions = this.httpClient.get(this.positionsUrl);
    let asd;
    positions.subscribe(result => {asd = result, console.log(result)});

    return this.httpClient.get<Positions>(this.positionsUrl);
  }
}
