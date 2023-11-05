import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

   name = ""; // Replace with the user's input
     email = ""; // Replace with the user's input
     message = "";

     constructor( private toastr: ToastrService) {};

  sendEmail(e : Event) {
     // Replace with the user's input

    // // Use the mailto function to open the user's default email client with the pre-filled message.
    // const mailtoLink = `mailto:abc@gmail.com?subject=Contact from ${name}&body=${message}`;
    // window.location.href = mailtoLink;

    emailjs.sendForm("service_h90ib5n", 'template_ghclxvz', e.target as HTMLFormElement, '8JSM1hTIfOXyKh8kv')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.toastr.success("Login successful");

          this.name = ""; // Replace with the user's input
          this.email = ""; // Replace with the user's input
          this.message = "";
      }, (error) => {
        console.log(error.text);
      });

 
  }
}

