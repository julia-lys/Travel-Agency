import { Injectable, signal, computed } from '@angular/core';
import { Oferta } from '../oferty/oferty.data';
import { PowiadomieniaService } from '../powiadomienia.service';
@Injectable({
  providedIn: 'root'
})
export class UlubioneService {
  private listaUlubionych = signal<Oferta[]>([]);
  constructor(private powiadomienia: PowiadomieniaService) {};

  ulubione = computed(() => this.listaUlubionych());

  dodajDoUlubionych(oferta: Oferta) {
    if (!this.listaUlubionych().some(item => item.id === oferta.id)) {
      this.listaUlubionych.update(prev => [...prev, oferta]);
      this.powiadomienia.pokaz(`Dodano do ulubionych: ${oferta.tytul}`);
    }
  }

  usunZUlubionych(id: number) {
    this.listaUlubionych.update(prev => prev.filter(item => item.id !== id));
  }
}