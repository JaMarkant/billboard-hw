import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {EmployeeAddFormComponent} from "./employee-add-form/employee-add-form.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./data/in-memory-data.service";
import {EmployeesRoutingModule} from "./employees-routing.module";
import { EmployeesComponent } from './employees/employees.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


@NgModule({
  declarations: [
    EmployeeAddFormComponent,
    EmployeeListComponent,
    EmployeesComponent,
    EmployeeDetailComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeesRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
  ],
  exports: [
    EmployeesComponent
  ]
})
export class EmployeesModule { }
