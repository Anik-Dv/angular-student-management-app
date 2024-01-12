import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { RegisterserviceService } from '../../services/registerservice.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatButtonModule,
            MatIconModule, 
            MatInputModule, 
            MatFormFieldModule,
            MatSnackBarModule,
            ReactiveFormsModule
          ],
  templateUrl: './studentregister.component.html',
  styleUrl:    './studentregister.component.css'
  
})

export class StudentRegisterComponent implements OnInit {

  data=new FormGroup ({
    name: new FormControl(''),
    age: new FormControl(''),
    department: new FormControl('')
  });

  constructor(private student:RegisterserviceService, private snack:MatSnackBar) {}

  ngOnInit(): void {
      
  }

  // Function to handle the form submission and display results on screen
  doStudentRegistration() {
    console.log("Submited Form")
    console.log("DATA : ", this.data.value)

    if(this.data.value.name ?? '', this.data.value.age ?? '', this.data.value.department ?? '') {
      console.log("empty field!")
      this.snack.open("SORRY! Can't Procced With Empty Field!", "Okay!")
    }

    this.student.studentRegistrationService(this.data.value).subscribe(
      response=> {
        console.log(response)
        this.snack.open("Successfully Registration Done", "OK")
      },
      error=> {
        console.error(error);
      }
    )

    


   }

  snackbtnClick() {
    this.snack.open("button clicked!")
  }

}
