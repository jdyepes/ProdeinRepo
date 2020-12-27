import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://localhost:44383/api/login/authenticate';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'
                          })
};

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> 
  {
    console.log(httpOptions);
    return this.http.post(AUTH_API , 
                          {
                            NombreLogin: credentials.NombreLogin,
                            Password: credentials.Password
                          }, 
                          httpOptions);
  }
}
