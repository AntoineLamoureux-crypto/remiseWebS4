import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Citizen } from '../models/citizen';
import { GenericService } from './generic.service';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService extends GenericService<Citizen, Number> {
  constructor(http: HttpClient) {
    super(http, 'http://localhost:9090/permisSante');
  }

  public userIsLoggedIn(){
    let username = sessionStorage.getItem('username');
    let password = sessionStorage.getItem('password');

    return username && password != null
  }

  public logOut() {
    sessionStorage.clear();
  }
}
