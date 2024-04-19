import { Component } from '@angular/core';
import { Etudiant } from './etudiant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  specialites = ['DSI' , 'MDW', 'RSI'];
  etudiant = new Etudiant("Nabil","nabil@gmail.com","DSI");
  
}
