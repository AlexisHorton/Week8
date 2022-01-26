import { TestBed } from '@angular/core/testing';

import { BandAPIService } from './band-api.service';

describe('BandAPIService', () => {
  let service: BandAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BandAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
