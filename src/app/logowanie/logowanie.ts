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
  probowanoZalogowac: boolean = false;

  onLogin() {
    this.probowanoZalogowac = true;

    if (!this.login || !this.haslo) {
      return;
    }

    
    alert("Zalogowano użytkownika: " + this.login)
  }
}

