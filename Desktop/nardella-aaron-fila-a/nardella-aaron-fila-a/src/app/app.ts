import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second-component/second-component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SecondComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'nardella-aaron-fila-a';
  
  tuo_cognome = 'app'; 
}