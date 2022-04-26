import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonComponent } from './radio-button.component';


@NgModule({
    declarations: [
        RadioButtonComponent
    ],
    exports: [
        RadioButtonComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        CommonModule
    ]
})
export class RadioButtonModule { }
