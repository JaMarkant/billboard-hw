import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PositionsService} from "./positions.service";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "../employees/data/in-memory-data.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
  ],
  providers: [
    PositionsService,
  ]
})
export class SharedModule { }
