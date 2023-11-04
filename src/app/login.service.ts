import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private apiUrl = 'http://localhost:3001/auth/login'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    console.log(email, password);

    const credentials = { email, password };
    return this.http.post(this.apiUrl, credentials);
  }
}
