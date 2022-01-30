import { TestBed } from '@angular/core/testing';

import { ProdIdDataService } from './prod-id-data.service';

describe('ProdIdDataService', () => {
  let service: ProdIdDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdIdDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
