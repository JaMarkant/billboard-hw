import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionsService } from "./positions.service";
import { ErrorDialogComponent } from './errors/error-dialog/error-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { ErrorDialogService } from "./errors/error-dialog.service";



@NgModule({
  declarations: [
    ErrorDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  exports: [
    CommonModule,
    ErrorDialogComponent
  ],
  providers: [
    PositionsService,
    ErrorDialogService
  ]
})
export class SharedModule { }
