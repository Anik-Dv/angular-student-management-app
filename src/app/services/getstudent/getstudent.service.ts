import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetstudentService {

  constructor(private http:HttpClient) { }

  getSingleStudentService(id:any) {
    console.log(id)
    return this.http.get(`/v1/student/${id}`).pipe(take(1), map((res:any)=> {res.data}))
  }

}
