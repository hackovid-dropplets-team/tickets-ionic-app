import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { tap, finalize, map } from 'rxjs/operators';
import { User } from '../classes/user';

interface AuthUser {
  pk: number;
  username: string;
  first_name: string;
  last_name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public prefix = 'rest-auth';

  constructor(
    public api: BaseApiService,
  ) {
  }
  public isLoggedIn(): boolean {
    return !!this.api.getAuthToken();
  }

  public login(username: string, password: string) {
    return this.api.post<{ key: string }>(`${this.prefix}/login`, { username, password }).pipe(tap((res) => {
      this.api.setAuthToken(res.key);
    }));
  }

  public logout() {
    return this.api.post(`${this.prefix}/logout`, {}).pipe(finalize(() => {
      this.api.deleteAuthToken();
    }));
  }

  public getUser() {
    return this.api.get(`${this.prefix}/user`).pipe(map((authUser: AuthUser): User => {
      return { id: authUser.pk, username: authUser.username, first_name: authUser.first_name, last_name: authUser.last_name}; 
    }));
  }

  public register(username: string, password1: string, password2: string) {
    return this.api.post<{ key: string }>(`${this.prefix}/registration`, { username, password1, password2 }).pipe(tap((res) => {
      this.api.setAuthToken(res.key);
    }));
  }

}
