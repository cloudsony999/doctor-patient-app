import { TestBed } from '@angular/core/testing';

import { MonalisaService } from './monalisa.service';

describe('MonalisaService', () => {
  let service: MonalisaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonalisaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
