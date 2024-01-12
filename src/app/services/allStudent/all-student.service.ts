import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllStudentService {

  students: any[] = [];

  constructor(private http:HttpClient) { }

  getSingleStudentService() {
    return this.http.get<any[]>(`/v1/student`).pipe(take(1), map((data :any)=> {this.students = data;}))
  }
}
