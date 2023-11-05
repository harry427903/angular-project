import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  // private apiUrl = 'http://localhost:3001/auth/signup'; 
    private apiUrl = 'https://fundfusion-backend-api.vercel.app/auth/signup'


  constructor(private http: HttpClient) {}

  signup(name: string, email: string, password: string) {
    const signupData = { name, email, password }; // Include the 'name' field
    return this.http.post(this.apiUrl, signupData);
  }
}
