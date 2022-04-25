import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { InputComponent } from './input.component';


@NgModule({
  declarations: [
    InputComponent
  ],
  exports: [
    InputComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class InputModule { }
