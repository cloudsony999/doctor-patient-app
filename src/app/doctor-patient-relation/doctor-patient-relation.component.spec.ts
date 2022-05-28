import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPatientRelationComponent } from './doctor-patient-relation.component';

describe('DoctorPatientRelationComponent', () => {
  let component: DoctorPatientRelationComponent;
  let fixture: ComponentFixture<DoctorPatientRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPatientRelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorPatientRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
