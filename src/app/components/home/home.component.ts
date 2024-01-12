import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UploadFileServiceService } from '../../services/uploadfile/upload-file-service.service';
import { DownloadFileServiceService } from '../../services/downloadFile/download-file-service.service';
import { DeletestudentService } from '../../services/delete-student/deletestudent.service';
import { RouterModule } from '@angular/router';


// export class student {
//   constructor(
//     public name: string,
//     public StudentId: number,
//     public Age: number,
//     public Departmant: string,
//     public Assignment: string 
//    ){}
// }

@Component({
  selector: 'app-home',
  standalone: true,  
  imports: [MatButtonModule,
            MatIconModule, 
            MatInputModule, 
            MatFormFieldModule,
            MatTableModule,
            FormsModule,
            MatSnackBarModule,
            ReactiveFormsModule,
            CommonModule,
            RouterModule
          ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  studentData: any[] = [];
  students: any[] = [];

  
  ngOnInit(): void {
    this.http.get<any[]>('/v1/student') 
      .subscribe(data => {
        this.students = data;
      });
  }
  
  data=new FormGroup ({
    id: new FormControl(''),
  });

  downloaddata=new FormGroup ({
    fileName: new FormControl('')
  });

  
  constructor(private http: HttpClient,
     private snack:MatSnackBar, 
     private fileUploadService: UploadFileServiceService, 
     private fileDownloadService: DownloadFileServiceService, 
     private studentService: DeletestudentService) {}
  
  doSearch() {
    console.log("Submited Form")
    console.log("Id : ", this.data.value)   
    this.http.get<any[]>('/v1/student/'+this.data.value.id) 
      .subscribe(data => {
        console.log(data)
        this.students = data; 
        this.snack.open("Success, Student Is Exists.")
      },error=> {
        console.error(error);
        this.snack.open("Undefiend!, Student Is Dosen't Exists!.", "Okay!")
      });
    }

  selectedFile: File | undefined;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  doUploadFile() { 
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile)
        .subscribe(response => {
          console.log('File uploaded successfully:', response);
          this.snack.open("Success. Your Assignment Uploaded.")
        }, error => {
          console.error('Error uploading file:', error);
          this.snack.open("Sorry!. Your Assignment Not Uploaded!")
        });
    }
  }


  downloadFile() {
    this.fileDownloadService.downloadFile(this.downloaddata.value.fileName!).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = this.downloaddata.value.fileName!;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }

  //Delete an Student
  onDeleteStudent(studentId: number) { 
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(studentId).subscribe(() => {
        // Handle success, e.g., refresh the student list
        console.log('Student deleted successfully');
        this.snack.open("Student deleted successfully")
        //this.fetchStudents();
      }, error => {
        // Handle error
        this.snack.open("Sorry not delete the student!")
        console.error('Error deleting student', error);
      });
    } else {
      this.snack.open("No student selected for deletion!")
      console.error('No student selected for deletion');
    }
  }


}

  