import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SubscribeService } from './subscribe';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthService implements CanActivate, CanLoad {

  constructor(private route: Router, private service: SubscribeService) { }
  canLoad(route: Route, segments: UrlSegment[]) {
    if (this.service.userIsLoggedIn()) return true;
      this.route.navigate(['login'])
    return false;
  }
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) {
      if (this.service.userIsLoggedIn()) return true;
      this.route.navigate(['login'])
    return false;
    }
}
