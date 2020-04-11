import { Injectable } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public prefix = 'rest-auth';

  isLogged = new BehaviorSubject(false);

  constructor(
    public api: BaseApiService,
  ) {
  }

  public login(username: string, password: string) {
    return this.api.post(`${this.prefix}/login`, { username, password });
  }

  public logout() {
    return this.api.post(`${this.prefix}/logout`, {});
  }

  public getUser() {
    return this.api.get(`${this.prefix}/user`);
  }

  public register(username: string, password: string, password2: string) {
    return this.api.post(`${this.prefix}/registration`, { username, password, password2 });
  }

}
