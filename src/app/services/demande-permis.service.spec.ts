import { TestBed } from '@angular/core/testing';

import { DemandePermisService } from './demande-permis.service';

describe('DemandePermisService', () => {
  let service: DemandePermisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandePermisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
