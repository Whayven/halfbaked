import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Half Baked Kitchen';
  showing = true;

  hide(){
    //method to hide DOM elements
    this.showing = !this.showing;
  }

  login(){
    //authenticate user
    this.hide();
  }
}
