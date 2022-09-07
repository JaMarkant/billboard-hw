import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {EmployeeAddFormComponent} from "./employee-add-form/employee-add-form.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./data/in-memory-data.service";


@NgModule({
  declarations: [
    EmployeeAddFormComponent,
    EmployeeListComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
  ],
  exports: [
    EmployeeListComponent,
    EmployeeAddFormComponent
  ]
})
export class EmployeesModule { }
