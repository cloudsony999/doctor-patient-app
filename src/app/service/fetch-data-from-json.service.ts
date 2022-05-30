import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataFromJSONService {

  constructor(private http: HttpClient) { }

  //url="./../../assets/doctor-patient-list.json";
  //private url="./../../assets/dr.json";
  private url1="http://localhost:8888/api/getAllDoctors";
  getData() {
    return this.http.get(this.url1);
  }
}
