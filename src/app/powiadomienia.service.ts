import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PowiadomieniaService {
  wiadomosc = signal<string | null>(null);

  pokaz(tekst: string) {
    this.wiadomosc.set(tekst);
    setTimeout(() => this.wiadomosc.set(null), 3000);
  }
}