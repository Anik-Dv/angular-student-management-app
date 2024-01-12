import { TestBed } from '@angular/core/testing';

import { AllStudentService } from './all-student.service';

describe('AllStudentService', () => {
  let service: AllStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
