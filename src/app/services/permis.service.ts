import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Permis } from '../models/permis';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class PermisService extends GenericService<Permis, Number> {

  constructor(http: HttpClient) {
    super(http, 'http://localhost:9090/permisSante');
  }
}
