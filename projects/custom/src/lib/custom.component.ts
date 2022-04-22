import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-custom',
  template: `
    <p>
      custom works!
    </p>
  `,
  styles: [
  ]
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
