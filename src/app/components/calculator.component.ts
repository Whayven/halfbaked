import { Component } from "@angular/core";

@Component({
    selector: "calc",
    templateUrl: "../templates/calculator.component.html"
})
export class CalculatorComponent {

    showing = false;
    totalPotency = 0.00;
    potencyPer = 0.00;
    extractionRate = 0.89
    selected = "Coconut oil";

    hide() {
        //method to hide DOM elements
        this.showing = !this.showing;
      }


    calculate(){
        this.hide();
        // this.selected === "Coconut oil" ? this.extractionRate = 0.89;
    }
}