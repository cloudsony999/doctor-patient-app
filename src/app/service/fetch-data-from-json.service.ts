import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataFromJSONService {

  constructor(private http: HttpClient) { }

  url="./../../assets/doctor-patient-list.json";
  getData() {
    return this.http.get(this.url);
  }
}
