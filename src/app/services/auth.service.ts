import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReqLoginUserInterface } from '@app/interface/User';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

const httpHeader = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.api_server;

  constructor(private http: HttpClient) {}

  loginUser(data: ReqLoginUserInterface): Observable<ReqLoginUserInterface> {
    return this.http.post<ReqLoginUserInterface>(
      `${this.baseUrl}/auth/login`,
      data,
      httpHeader
    );
  }
}
