import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logowanie',
  imports: [FormsModule, RouterLink],
  templateUrl: './logowanie.html',
  styleUrl: './logowanie.css',
})
export class Logowanie {
  login: string = '';
  haslo: string = '';

  onLogin() {
    console.log('Próba logowania:', this.login, this.haslo);
    alert(`Logowanie użytkownika: ${this.login}`);
  }

  onRegister() {
    console.log('Próba rejestracji');
    alert('Przenoszenie do formularza rejestracji...');
  }
}

