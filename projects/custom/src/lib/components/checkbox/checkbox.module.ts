import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        CheckboxComponent
    ],
    exports: [
        CheckboxComponent,
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        CommonModule
    ]
})
export class CheckboxModule { }
