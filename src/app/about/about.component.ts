import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  sendEmail() {
    const name = "John Doe"; // Replace with the user's input
    const email = "john.doe@example.com"; // Replace with the user's input
    const message = "This is a sample message"; // Replace with the user's input

    // Use the mailto function to open the user's default email client with the pre-filled message.
    const mailtoLink = `mailto:abc@gmail.com?subject=Contact from ${name}&body=${message}`;
    window.location.href = mailtoLink;
  }
}
