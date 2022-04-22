import { NgModule } from '@angular/core';
import { CustomComponent } from './custom.component';
import { ButtonModule } from './components/button/button.module';



@NgModule({
  declarations: [
    CustomComponent,
  ],
  imports: [
    ButtonModule,
  ],
  exports: [
    CustomComponent,
    ButtonModule,
  ]
})
export class CustomModule { }
