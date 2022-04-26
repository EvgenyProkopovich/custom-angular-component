import {
  ChangeDetectorRef,
  Directive,
  ElementRef,
  HostBinding,
  Input, NgZone, Renderer2
} from '@angular/core';
import { ComponentSize } from './component-size';
import { ComponentOrCustomStatus } from './component-status';
import { ComponentShape } from './component-shape';
import { ButtonAppearance } from './component-apperance';
import { BooleanInput, convertToBoolProperty } from './helpers';

@Directive()
export abstract class BaseComponent {
  /**
   * Button size, available sizes:
   * `tiny`, `small`, `medium`, `large`, `giant`
   */
  @Input() size: ComponentSize = 'medium';

  /**
   * Button status (adds specific styles):
   * `primary`, `info`, `success`, `warning`, `danger`
   */
  @Input() status: ComponentOrCustomStatus = 'basic';

  /**
   * Button shapes: `rectangle`, `round`, `semi-round`
   */
  @Input() shape: ComponentShape = 'rectangle';

  /**
   * Button appearance: `filled`, `outline`
   */
  @Input() appearance: ButtonAppearance = 'filled';

  @Input()
  @HostBinding('class.status-primary')
  get primary() {
    return this.status === 'primary';
  }

  @HostBinding('class.status-info')
  get info() {
    return this.status === 'info';
  }

  @HostBinding('class.status-success')
  get success() {
    return this.status === 'success';
  }

  @HostBinding('class.status-warning')
  get warning() {
    return this.status === 'warning';
  }

  @HostBinding('class.status-danger')
  get danger() {
    return this.status === 'danger';
  }

  @HostBinding('class.status-basic')
  get basic() {
    return this.status === 'basic';
  }

  @HostBinding('class.status-control')
  get control() {
    return this.status === 'control';
  }

  @HostBinding('class.size-tiny')
  get tiny() {
    return this.size === 'tiny';
  }

  @HostBinding('class.size-small')
  get small() {
    return this.size === 'small';
  }

  @HostBinding('class.size-medium')
  get medium() {
    return this.size === 'medium';
  }

  @HostBinding('class.size-large')
  get large() {
    return this.size === 'large';
  }

  @HostBinding('class.size-giant')
  get giant() {
    return this.size === 'giant';
  }

  @HostBinding('class.shape-rectangle')
  get rectangle() {
    return this.shape === 'rectangle';
  }

  @HostBinding('class.shape-round')
  get round() {
    return this.shape === 'round';
  }

  @HostBinding('class.shape-semi-round')
  get semiRound() {
    return this.shape === 'semi-round';
  }

  @HostBinding('class.input-full-width')
  get fullWidth(): boolean {
    return this._fullWidth;
  }
  set fullWidth(value: boolean) {
    this._fullWidth = convertToBoolProperty(value);
  }
  private _fullWidth = false;
  static ngAcceptInputType_fullWidth: BooleanInput;

  constructor(
    public changeDetector: ChangeDetectorRef,
    public renderer: Renderer2,
    public hostElement: ElementRef<HTMLElement>,
    public cd: ChangeDetectorRef,
    public zone: NgZone,
  ) {}
}
