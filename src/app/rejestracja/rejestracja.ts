import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rejestracja',
  imports: [FormsModule, CommonModule, RouterModule],
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

  probowanoZarejestrowac = false;

  isFullAge(): boolean {
    if (!this.userData.dataUrodzenia) return false;
    const birthDate = new Date(this.userData.dataUrodzenia);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18;
  }


  allFieldsFilled(): boolean {
    return Object.values(this.userData).every(value => value.trim() !== '');
  }

  utworzKonto() {
    this.probowanoZarejestrowac = true;

    if (!this.allFieldsFilled() || 
        this.userData.haslo !== this.userData.powtorzHaslo || 
        !this.isFullAge()) {
      return;
    }
    
    console.log('Dane do rejestracji:', this.userData);
    alert('Konto zostało utworzone!');
  }
}