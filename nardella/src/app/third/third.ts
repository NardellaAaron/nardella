import { Component } from '@angular/core';
import { FourthComponent } from '../fourth/fourth'; // <--- Importiamo il quarto

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [FourthComponent], // <--- Lo aggiungiamo alla lista
  templateUrl: './third.html',
  styleUrl: './third.css'
})
export class ThirdComponent {
  name = 'terzo';
}