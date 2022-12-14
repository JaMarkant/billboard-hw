import { NgModule } from '@angular/core';
import { SharedModule } from "../shared/shared.module";
import { EmployeeAddFormComponent } from "./employee-add-form/employee-add-form.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./data/in-memory-data.service";
import { EmployeesRoutingModule } from "./employees-routing.module";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { CoreModule } from "../core/core.module";


@NgModule({
  declarations: [
    EmployeeAddFormComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeesRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, passThruUnknownUrl: true }
    ),
  ]
})
export class EmployeesModule { }
