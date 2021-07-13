import { Component } from "@angular/core";

@Component({
    selector: "cart",
    templateUrl: "../templates/cart.component.html",
})
export class CartComponent {
    showing = false;
    totalPrice = 0.00;
    merchandise = '';

    show() {
        //method to hide DOM elements
        this.showing = !this.showing;
    }

    checkout() {
        this.show();
    }
}