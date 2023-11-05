import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  // private apiUrl = 'http://localhost:3001/auth/login';
  private apiUrl = 'https://fundfusion-backend-api.vercel.app/auth/login'

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    console.log(email, password);

    const credentials = { email, password };
    return this.http.post(this.apiUrl, credentials);
  }
}
