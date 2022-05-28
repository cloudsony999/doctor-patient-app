import { Component, OnInit } from '@angular/core';
import { FetchDataFromJSONService } from './../service/fetch-data-from-json.service';

@Component({
  selector: 'app-doctor-patient-relation',
  templateUrl: './doctor-patient-relation.component.html',
  styleUrls: ['./doctor-patient-relation.component.css']
})
export class DoctorPatientRelationComponent implements OnInit {

  doctorPatientList: any;
  patientList: any;
  doctorName: any;
  patientName: any;

  constructor(private fetchDataFromJSON: FetchDataFromJSONService) { }

  ngOnInit(): void {
    this.fetchDataFromJSON.getData().subscribe((data) => {
      this.doctorPatientList = data;
    });
  }

  findCorrespondingPatient() {
    if (this.doctorName) {
      this.doctorPatientList.forEach((data: any) => {
        if (data.doctorName == this.doctorName) {
          this.patientList = data.patient;
        }
      });
    }
  }

}
