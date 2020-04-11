import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { BehaviorSubject } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public prefix = 'rest-auth';

  constructor(
    public api: BaseApiService,
  ) {
  }

  public login(username: string, password: string) {
    return this.api.post<{key: string}>(`${this.prefix}/login`, { username, password }).pipe(tap((res) => {
      this.api.setAuthToken(res.key);
    }));
  }

  public logout() {
    return this.api.post(`${this.prefix}/logout`, {}).pipe(finalize(() => {
      this.api.deleteAuthToken();
    }));
  }

  public getUser() {
    return this.api.get(`${this.prefix}/user`).pipe();
  }

  public register(username: string, password1: string, password2: string) {
    return this.api.post<{key: string}>(`${this.prefix}/registration`, { username, password1, password2 }).pipe(tap((res) => {
      this.api.setAuthToken(res.key);
    }));
  }

}
