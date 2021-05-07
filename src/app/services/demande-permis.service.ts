import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Citizen } from '../models/citizen';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class DemandePermisService extends GenericService<Citizen, Number> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:9090/demande-permis');
  }
}
