import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFileuploadComponent } from './studentfileupload.component';

describe('StudentFileuploadComponent', () => {
  let component: StudentFileuploadComponent;
  let fixture: ComponentFixture<StudentFileuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentFileuploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentFileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
