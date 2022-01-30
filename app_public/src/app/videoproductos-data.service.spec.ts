import { TestBed } from '@angular/core/testing';

import { VideoproductosDataService } from './videoproductos-data.service';

describe('VideoproductosDataService', () => {
  let service: VideoproductosDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoproductosDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
