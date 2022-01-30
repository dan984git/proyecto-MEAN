import { TestBed } from '@angular/core/testing';

import { DemostracionesDataService } from './demostraciones-data.service';

describe('DemostracionesDataService', () => {
  let service: DemostracionesDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemostracionesDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
