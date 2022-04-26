import {
  Component,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
import { BooleanInput, convertToBoolProperty } from '../helpers';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'button[libButton]',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends BaseComponent{
  @Input()
  @HostBinding('attr.aria-disabled')
  @HostBinding('class.btn-disabled')
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

  /**
   * Sets `filled` appearance
   */
  @Input()
  @HostBinding('class.appearance-filled')
  get filled(): boolean {
    return this.appearance === 'filled';
  }
  set filled(value: boolean) {
    if (convertToBoolProperty(value)) {
      this.appearance = 'filled';
    }
  }
  static ngAcceptInputType_filled: BooleanInput;

  /**
   * Sets `outline` appearance
   */
  @Input()
  @HostBinding('class.appearance-outline')
  get outline(): boolean {
    return this.appearance === 'outline';
  }
  set outline(value: boolean) {
    if (convertToBoolProperty(value)) {
      this.appearance = 'outline';
    }
  }
  static ngAcceptInputType_outline: BooleanInput;

  @HostListener('click', ['$event'])
  onClick(event: { preventDefault: () => void; stopImmediatePropagation: () => void; }) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}
