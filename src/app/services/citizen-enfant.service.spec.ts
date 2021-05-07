import { TestBed } from '@angular/core/testing';

import { CitizenEnfantService } from './citizen-enfant.service';

describe('CitizenEnfantService', () => {
  let service: CitizenEnfantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitizenEnfantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
