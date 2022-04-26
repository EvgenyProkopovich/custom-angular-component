import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { BooleanInput, convertToBoolProperty } from '../helpers';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'checkbox[libCustomComponent]',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends BaseComponent {
  onChange: any = () => { };
  onTouched: any = () => { };

  @Output() checkedChange = new EventEmitter<boolean>();

  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = convertToBoolProperty(value);
  }
  private _checked: boolean = false;
  static ngAcceptInputType_checked: BooleanInput;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = convertToBoolProperty(value);
  }
  private _disabled: boolean = false;
  static ngAcceptInputType_disabled: BooleanInput;

  writeValue(val: any) {
    this._checked = val;
    this.changeDetector.markForCheck();
  }

  setDisabledState(val: boolean) {
    this.disabled = convertToBoolProperty(val);
    this.changeDetector.markForCheck();
  }

  setTouched() {
    this.onTouched();
  }

  updateValueAndIndeterminate(event: Event): void {
    const input = (event.target as HTMLInputElement);
    this.checked = input.checked;
    this.checkedChange.emit(this.checked);
    this.onChange(this.checked);
  }
}
