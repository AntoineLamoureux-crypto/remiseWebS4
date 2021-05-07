import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CitizenEnfant } from '../models/citizen-enfant';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class CitizenEnfantService extends GenericService<CitizenEnfant, Number> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:9090/enfantService');
  }
}
