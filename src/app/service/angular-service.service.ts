import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Bean } from './Bean';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AngularServiceService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // URL
  private getUrl = 'http://localhost:8086/employee/';


  getData(name: string) {
    return this.http.get(this.getUrl + name);
  }
  
  getDataById(empId: number) {
    return this.http.get(this.getUrl + "id/"+empId);
  }

  postData(data: any) {
    return this.http.post(this.getUrl + "add", JSON.stringify(data), this.httpOptions)
  }

  updateData(data: any, empId: number) {
    return this.http.put(this.getUrl + "update/" + empId, JSON.stringify(data), this.httpOptions)
  }

  deleteData(empId: number) {
    return this.http.delete(this.getUrl + "delete/" + empId)
  }
}
