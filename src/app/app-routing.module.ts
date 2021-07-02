import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpComponent } from './components/signup.component';
import { MerchandiseComponent } from './components/merchandise.component';
import { CartComponent } from './components/cart.component';
import { CalculatorComponent } from './components/calculator.component';

const routes: Routes = [
  {path: "./app.component", component: AppComponent},
  {path: "./components/signup.component", component: SignUpComponent},
  {path: "./components/merchandise.component", component: MerchandiseComponent},
  {path: "./components/cart.component", component: CartComponent},
  {path: "./components/calculator.component", component: CalculatorComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppRoutingModule { }
