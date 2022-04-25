import {
  Component, HostBinding, Input,
  } from '@angular/core';
import { BooleanInput, convertToBoolProperty } from '../helpers';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'input[libInput]',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseComponent {
  @Input()
  @HostBinding('attr.aria-disabled')
  @HostBinding('class.input-disabled')
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    if (this.disabled !== convertToBoolProperty(value)) {
      this._disabled = !this.disabled;
      this.renderer.setProperty(this.hostElement.nativeElement, 'disabled', this.disabled);
    }
  }
  private _disabled: boolean = false;
  static ngAcceptInputType_disabled: BooleanInput;

}
