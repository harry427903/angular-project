import { Component } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = { email: '', password: '' }; // Define the user object
  
  
  constructor(private loginService: LoginService, private router: Router) {}
  
  
  onLogin() {
    console.log(this.user);
    console.log(this.user.email + "inside onLobin");
    
    this.loginService.login(this.user.email, this.user.password).subscribe(
      (response) => {
        // Handle a successful login response
        console.log('Login successful:', response);
        // Redirect to another page or perform other actions
        this.router.navigate(['/home']);
      },
      (error) => {
        // Handle API call errors
        console.error('Login failed:', error);
      }
    );
  }
}
