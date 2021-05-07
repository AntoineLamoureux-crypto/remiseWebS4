import { TestBed } from '@angular/core/testing';

import { DemandePermisEnfantService } from './demande-permis-enfant.service';

describe('DemandePermisEnfantService', () => {
  let service: DemandePermisEnfantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandePermisEnfantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
