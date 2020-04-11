import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {

  constructor(public http: HttpClient) { }

  public getBaseUrl(): string {
    return environment.api_url;
  }

  public getFullPath(path: string) {
    return `${this.getBaseUrl()}/${path}/`;
  }

  public getAuthToken(): string {
    return localStorage.getItem('authToken');
  }

  public setAuthToken(authToken: string) {
    localStorage.setItem('authToken', authToken);
  }

  public deleteAuthToken() {
    localStorage.removeItem('authToken');
  }

  public getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const authToken = this.getAuthToken();
    if (authToken) {
      headers = headers.append('Authorization', `Token ${authToken}`);
    }
    return headers;
  }

  public get<T>(path: string): Observable<T> {
    const fullPath: string = this.getFullPath(path);
    return this.http.get<T>(fullPath, { headers: this.getHeaders() });
  }

  public post<T>(path: string, data: any): Observable<T> {
    const fullPath: string = this.getFullPath(path);
    return this.http.post<T>(fullPath, data, { headers: this.getHeaders() });
  }

  public delete<T>(path: string): Observable<T> {
    const fullPath: string = this.getFullPath(path);
    return this.http.delete<T>(fullPath, { headers: this.getHeaders() });
  }

  public patch<T>(path: string, data: any): Observable<T> {
    const fullPath: string = this.getFullPath(path);
    return this.http.patch<T>(fullPath, data, { headers: this.getHeaders() });
  }

  public put<T>(path: string, data: any): Observable<T> {
    const fullPath: string = this.getFullPath(path);
    return this.http.put<T>(fullPath, { data, headers: this.getHeaders() });
  }

}
