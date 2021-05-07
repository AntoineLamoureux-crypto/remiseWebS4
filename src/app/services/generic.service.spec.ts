import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GenericService } from './generic.service';

describe('GenericService', () => {
  let service: GenericService<HttpClient, string>;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
