import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  isMenuOpen = false;

  isLoggedIn = false;
  ngOnInit() {
    console.log("inside ngonit")
    this.isLoggedIn = localStorage.getItem("loggedin") === "true";
  }
  logout() {
    localStorage.setItem("loggedin","false");
    this.isLoggedIn = false;
    window.location.reload();

  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
