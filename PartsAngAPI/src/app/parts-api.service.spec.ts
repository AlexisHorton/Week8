import { TestBed } from '@angular/core/testing';

import { PartsApiService } from './parts-api.service';

describe('PartsApiService', () => {
  let service: PartsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
