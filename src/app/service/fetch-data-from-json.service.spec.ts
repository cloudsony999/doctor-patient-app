import { TestBed } from '@angular/core/testing';

import { FetchDataFromJSONService } from './fetch-data-from-json.service';

describe('FetchDataFromJSONService', () => {
  let service: FetchDataFromJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchDataFromJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
