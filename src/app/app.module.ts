import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/signup.component';
import { MerchandiseComponent } from './components/merchandise.component';
import { CartComponent } from './components/cart.component';
import { CalculatorComponent } from './components/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    MerchandiseComponent,
    CartComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
