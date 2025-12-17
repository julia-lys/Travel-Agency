import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rejestracja',
  imports: [FormsModule, CommonModule],
  templateUrl: './rejestracja.html',
  styleUrl: './rejestracja.css',
})
export class Rejestracja {
  userData = {
    imie: '',
    nazwisko: '',
    dataUrodzenia: '',
    email: '',
    haslo: '',
    powtorzHaslo: ''
  };

  utworzKonto() {
    if (this.userData.haslo !== this.userData.powtorzHaslo) {
      alert('Hasła nie są identyczne!');
      return;
    }

    console.log('Dane do rejestracji:', this.userData);
    alert('Konto zostało utworzone!');
  }
}
