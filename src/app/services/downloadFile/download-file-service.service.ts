import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadFileServiceService {

  constructor(private http:HttpClient) { }

  downloadFile(fileName: string): Observable<Blob> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get(`${'/v1/student/downloadFile'}/${fileName}`, { responseType: 'blob', headers: headers });
  }
}
