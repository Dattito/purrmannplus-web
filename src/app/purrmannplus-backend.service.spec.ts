import { TestBed } from '@angular/core/testing';

import { PurrmannplusBackendService } from './purrmannplus-backend.service';

describe('PurrmannplusBackendService', () => {
  let service: PurrmannplusBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurrmannplusBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
