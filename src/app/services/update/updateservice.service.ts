import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateserviceService {

  constructor(private http:HttpClient) { }

  studentUpdateService(studentId: number, newData: any) {
    console.log(newData)
    return this.http.put(`/v1/student/${studentId}`, newData).pipe(take(1), map((res:any)=> {res.data}))
  }



}
