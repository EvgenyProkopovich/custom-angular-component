import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'custom-angular-component';

  ngOnInit() {

  }

  public change(event: any) {
    console.log(event);
  }
}
