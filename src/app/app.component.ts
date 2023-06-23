import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gift-finder';

  ngOnInit() {
    if (location.pathname != "/") { location.replace("/") };
  }
}

