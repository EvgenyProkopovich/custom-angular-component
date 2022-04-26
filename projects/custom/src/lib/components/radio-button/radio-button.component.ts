import {
  Component, ElementRef, EventEmitter, Input, Output, ViewChild,
} from '@angular/core';
import { BooleanInput, convertToBoolProperty } from '../helpers';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'radio[libCustomComponent]',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent extends BaseComponent {
  @Input()
  get name(): string {
    return <string>this._name;
  }
  set name(value: string) {
    if (this._name !== value) {
      this._name = value;
    }
  }
  private _name: string | undefined;

  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    const boolValue = convertToBoolProperty(value);
    if (this._checked !== boolValue) {
      this._checked = boolValue;
    }
  }
  private _checked: boolean = false;
  static ngAcceptInputType_checked: BooleanInput;

  @Input()
  get value(): any {
    return this._value;
  }
  set value(value: any) {
    if (this._value !== value) {
      this._value = value;
    }
  }
  private _value: any;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(disabled: boolean) {
    const boolValue = convertToBoolProperty(disabled);
    if (this._disabled !== boolValue) {
      this._disabled = boolValue;
    }
  }
  private _disabled: boolean = false;
  static ngAcceptInputType_disabled: BooleanInput;

  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  @Output() blur: EventEmitter<void> = new EventEmitter();

  @ViewChild('input', { read: ElementRef }) input: ElementRef<HTMLInputElement> | undefined;

  onChange(event: Event) {
    event.stopPropagation();
    this.checked = true;
    this.valueChange.emit(this.value);
  }

  onClick(event: Event) {
    event.stopPropagation();
  }
}
