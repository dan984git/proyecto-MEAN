import { TestBed } from '@angular/core/testing';

import { QuehacemosDataService } from './quehacemos-data.service';

describe('QuehacemosDataService', () => {
  let service: QuehacemosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuehacemosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
