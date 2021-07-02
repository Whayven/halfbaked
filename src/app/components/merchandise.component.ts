import { Component } from "@angular/core";

@Component({
    selector: "merch",
    templateUrl: "../templates/merchandise.component.html"
})
export class MerchandiseComponent {

    showing = true;

  hide(){
    //method to hide DOM elements
    this.showing = !this.showing;
  }

  placeOrder(){
    //authenticate user
    this.hide();
  }
}