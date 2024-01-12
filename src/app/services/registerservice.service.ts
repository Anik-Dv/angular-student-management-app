import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {
  //private domain:string="http://localhost:9000"

  constructor(private http:HttpClient) { }

  studentRegistrationService(data:any) {
    console.log(data)
     //return this.http.post(`${this.domain}/v1/student/create`, data).pipe(take(1), map((res:any)=>{return res.data;})) 
    return this.http.post(`/v1/student/create`, data).pipe(take(1), map((res:any)=> {res.data}))
  }

}
