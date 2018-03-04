import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public slides = [
    'b1.jpg',
    'b2.jpg',
    'b3.jpg',
    'b4.jpg'
  ];
}
