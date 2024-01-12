import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeletestudentService {

  constructor(private http: HttpClient) { }

  deleteStudent(studentId: number): Observable<void> {
    return this.http.delete<void>(`${'/v1/student'}/${studentId}`);
  }
}
