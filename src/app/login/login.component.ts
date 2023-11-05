import { Component } from '@angular/core';
import { LoginService } from './../login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {


  user = { email: '', password: '' }; // Define the user object
  
  isLogin = false;
  constructor(private loginService: LoginService, private router: Router , private toastr: ToastrService, private cdr: ChangeDetectorRef, private location: Location) {}
  
  
  onLogin() {
    console.log(this.user);
    console.log(this.user.email + "inside onLobin");
    
    this.loginService.login(this.user.email, this.user.password).subscribe(
      (response) => {
        // Handle a successful login response
        console.log('Login successful:', response);
        this.isLogin=true;
        localStorage.setItem("loggedin",this.isLogin.toString());


        // Redirect to another page or perform other actions
        this.toastr.success("Login successful");

        this.router.navigate(['/home']);
      },
      (error) => {
        // Handle API call errors
        console.error('Login failed:', error);
      }
    );
  }
}
