import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ReqLoginInterface,
  ReqRegisterInterface,
  ResUserInterce,
} from '@app/interface/UserInterface';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

const dataUser: string | null = localStorage.getItem('dataUser');
const dataUserParse = dataUser && JSON.parse(dataUser);

const httpHeader = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const httpHeaderPrivate = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${dataUserParse?.token}`,
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  PostLogin(
    data: ReqLoginInterface | undefined
  ): Observable<ReqLoginInterface | undefined> {
    return this.http.post<ReqLoginInterface | undefined>(
      `${this.apiUrl}/auth/login`,
      data,
      httpHeader
    );
  }

  PostRegister(
    data: ReqRegisterInterface | undefined
  ): Observable<ReqRegisterInterface> {
    return this.http.post<ReqRegisterInterface>(
      `${this.apiUrl}/auth/register`,
      data,
      httpHeader
    );
  }

  PutUser(
    data: ReqRegisterInterface,
    id: string
  ): Observable<ReqRegisterInterface> {
    return this.http.patch<ReqRegisterInterface>(
      `${this.apiUrl}/api/users/${id}`,
      data,
      httpHeaderPrivate
    );
  }

  GetLitUsers(): Observable<ResUserInterce> {
    return this.http.get<ResUserInterce>(
      `${this.apiUrl}/api/users/`,
      httpHeaderPrivate
    );
  }

  DeleteUser(id: string): Observable<any> {
    return this.http.delete<any>(
      `${this.apiUrl}/api/users/${id}`,
      httpHeaderPrivate
    );
  }
}
