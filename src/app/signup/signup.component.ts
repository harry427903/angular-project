import { Component } from '@angular/core';
import { SignupService } from './../signup.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user = { name: '', email: '', password: '', confirmPassword: '' }; // Include 'name' field
  passwordsDoNotMatch = false;

  constructor(private signupService: SignupService,private router: Router) {}

  onSignup() {
    // Check if passwords match
    if (this.user.password === this.user.confirmPassword) {
      this.passwordsDoNotMatch = false; // Reset the error message
      this.signupService.signup(this.user.name, this.user.email, this.user.password).subscribe(
        (response) => {
          // Handle a successful sign-up response
          console.log('Sign-up successful:', response);
          // Redirect to another page or perform other actions
          this.router.navigate(['/home']);

        },
        (error) => {
          // Handle API call errors
          console.error('Sign-up failed:', error);
        }
      );
    } else {
      // Passwords do not match, show an error message
      this.passwordsDoNotMatch = true;
    }
  }
}
