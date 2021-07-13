import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Half Baked Kitchen';
  showing = true;
  firebaseUrl = "https://firebase.google.com/u/0/project/halbaked-kitchen/firestore/data/~2Fusers/";
  jsonExt = ".json";
  email = '';
  password = '';

  // constructor(private router: Router) {

  //  }

  validateUser() {
    //this function checks a username to make sure it exists in the database
  }

  hide() {
    //method to hide DOM elements
    this.showing = !this.showing;
  }

  // signup() {
  //   //call methods that validate user and hide the component
  //   if (this.email && this.password) {
  //     this.authService.signUpWithEmail(this.email, this.password)
  //     .then(() => {
  //       this.router.navigate(['./components/merchandise.component']);
  //     })
  //   }
  //   this.hide();
  // }

  login(){
    this.hide();
  }

  onEmailChange(event: any) {
    this.email = event.target.value;
  }

  onPasswordChange(event: any) {
    this.password = event.target.value;
  }

}
