import { TestBed } from '@angular/core/testing';

import { ErrorDialogService } from './error-dialog.service';
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('ErrorDialogService', () => {
  let service: ErrorDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        BrowserAnimationsModule,
      ],
      providers: [
        ErrorDialogService ,
      ]
    });
    service = TestBed.inject(ErrorDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have closed dialog on init', () => {
    expect(service.dialog.openDialogs.length).toEqual(0);
  });

  it('should create new dialog', () => {
    service.openDialog('testDialog', 300);
    expect(service.dialog.openDialogs.length).toEqual(1);
  });
});
