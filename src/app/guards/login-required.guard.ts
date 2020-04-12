import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginRequiredGuard implements CanActivate {
  constructor(
    protected auth: AuthService,
    private router: Router
    ) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(state);
      console.log(next);
    return this.isLogged(state.url);
  }
  // canActivateChild(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return this.isLogged();
  // }
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //   return this.isLogged();
  // }
  protected isLogged(afterRedirect: string): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/login'], {
        queryParams: {
          return: afterRedirect
        }
      });
      return false;
    }
    return true;
  }
}
