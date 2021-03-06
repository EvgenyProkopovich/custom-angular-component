import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule, CustomModule, InputModule, CheckboxModule, RadioButtonModule } from 'custom';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModule,
    InputModule,
    ButtonModule,
    CheckboxModule,
    RadioButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
