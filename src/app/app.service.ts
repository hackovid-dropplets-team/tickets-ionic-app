import { Injectable } from '@angular/core';
import { User } from './classes/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  user: User;

  constructor() { }

  public isLoggedIn(): boolean {
    return !!this.user;
  }
}
