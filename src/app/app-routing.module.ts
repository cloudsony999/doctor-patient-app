import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorPatientRelationComponent } from './doctor-patient-relation/doctor-patient-relation.component';

const routes: Routes = [
  { path: '', component: DoctorPatientRelationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
