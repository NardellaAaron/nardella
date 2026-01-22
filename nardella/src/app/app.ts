import { Component } from '@angular/core';
import { SecondComponent } from './second/second';
import { ThirdComponent } from './third/third';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SecondComponent, ThirdComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = 'app';
}