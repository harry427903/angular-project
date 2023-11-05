import { Component } from '@angular/core';
import { FeaturesComponent } from '../features/features.component';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
 

})

export class HomeComponent {



  isLoggedIn = false;
  ngOnInit() {
    this.isLoggedIn = localStorage.getItem("loggedin") === "true";

  }
}
