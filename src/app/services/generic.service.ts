import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citizen } from '../models/citizen';
import { Permis } from '../models/permis';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T, ID> {

  constructor(protected http: HttpClient, protected url: string) {}

  save(t: T): Observable<T> {
    return this.http.post<T>(this.url, t);
  }

  saveEnfant(t: T): Observable<T> {
    return this.http.post<T>(this.url, t);
  }

  findAllChilds(num_social: string, email: string): Observable<T[]> {
    return this.http.get<T[]>(this.url +'/'+ num_social +'/'+ email);
  }

  findAllCitizens(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  findPermit(num_social: string): Observable<Permis> {
    return this.http.get<Permis>(this.url +'/permis/'+ num_social);
  }

  findPermitId(num_social: string): Observable<number> {
    return this.http.get<number>(this.url +'/id/'+ num_social);
  }

  renewChildPermit(num_social: string): Observable<boolean> {
    return this.http.patch<boolean>(this.url + '/renew/' + num_social, num_social); 
  }

  renewAdultPermit(num_social: string): Observable<boolean> {
    return this.http.patch<boolean>(this.url + '/renew/' + num_social, num_social); 
  }

  findById(id: ID): Observable<T> {
    return this.http.get<T>(this.url + '/' + id);
  }

  findByNasm(nasm: ID): Observable<T> {
    return this.http.get<T>(this.url + '/' + nasm);
  }

  checkCitizenValidity(nassm: string): Observable<boolean> {
    return this.http.get<boolean>(this.url + '/validity/' + nassm);
  }
  login(userName: string, password: string): Observable<T> {
    return this.http.get<T>(this.url + '/' + userName + '/' + password);
  }

  typePermisAllowed(nassm: String): Observable<Number>{
    return this.http.get<Number>(this.url + '/' + nassm)
  }

  upadate(id: ID, t: T): Observable<T> {
    return this.http.put<T>(this.url + '/' + id, t, {});
  }

  deleteById(id: ID): Observable<T> {
    return this.http.delete<T>(this.url + '/' + id);
  }
}
