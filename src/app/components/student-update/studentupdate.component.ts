import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UpdateserviceService } from '../../services/update/updateservice.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatFormFieldModule,
            MatSnackBarModule,
            ReactiveFormsModule,
            CommonModule
          ],
  templateUrl: './studentupdate.component.html',
  styleUrl: './studentupdate.component.css'
})
export class StudentUpdateComponent {
  students: any[] = [];
  //updateForm?: FormGroup;


  updateForm=new FormGroup ({
    name: new FormControl(''),
    age: new FormControl(''),
    department: new FormControl('')
  }); 
  
  constructor(private http: HttpClient, private snack:MatSnackBar, private updateService:UpdateserviceService,  private formBuilder: FormBuilder) { }

  // load when this component is initilaze
  ngOnInit(): void {
    this.fetchStudents();
    // this.updateForm = this.formBuilder.group({
    //   name: [''],
    //   age: [''],
    //   department: [''],
    //   assignmentName: ['']
    // });
  }

  fetchStudents() {
    this.http.get<any[]>('/v1/student')
      .subscribe(data => {
        this.students = data;
      });
  }

  updateStudent(studentId: number) {
    const newData = this.updateForm?.value;
    this.updateService.studentUpdateService(studentId, newData)
      .subscribe(updatedStudent => {
        const index = this.students.findIndex(student => student.studentId === studentId);
        if (index !== -1) {
          this.students[index] = updatedStudent;
          this.snack.open("Successfully Updated Student.")
        } else {
          this.snack.open("Sorry! Student Is't Updated!.")
        }
      });
  }

  // Function to handle the form submission and display results on screen
  doStudentUpdate(studentId: number) {
    console.log("Submited Form")
    // console.log("DATA : ", this.data.value)

    // if(this.data.value.name ?? '', this.data.value.age ?? '', this.data.value.department ?? '') {
    //   console.log("empty field!")
    //   this.snack.open("SORRY! Can't Procced With Empty Field!", "Okay!")
    // }

    this.updateStudent(studentId);

  }



}
