import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeAddFormComponent} from "./employee-add-form/employee-add-form.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDetailComponent} from "./employee-detail/employee-detail.component";

const routes: Routes = [
  {path: 'employees', component: EmployeeListComponent},
  {path: 'employees/add', component: EmployeeAddFormComponent},
  {path: 'employees/detail/:id', component: EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
