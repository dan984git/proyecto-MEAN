import { TestBed } from '@angular/core/testing';

import { RecetasDataService } from './recetas-data.service';

describe('RecetasDataService', () => {
  let service: RecetasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
