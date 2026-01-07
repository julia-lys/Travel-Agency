import { Injectable, signal, computed } from '@angular/core';
import { Oferta } from '../oferty/oferty.data';
import { PowiadomieniaService } from '../powiadomienia.service';
@Injectable({
  providedIn: 'root'
})
export class KoszykService {

  private elementyKoszyka = signal<Oferta[]>([]);
  constructor(private powiadomienia: PowiadomieniaService) {}
  listaElementow = computed(() => this.elementyKoszyka());

  sumaCen = computed(() => 
    this.elementyKoszyka().reduce((suma, oferta) => suma + oferta.cena, 0)
  );

  dodajDoKoszyka(oferta: Oferta) {
    this.elementyKoszyka.update(prev => [...prev, oferta]);
    this.powiadomienia.pokaz(`Dodano do koszyka: ${oferta.tytul}`);
  }

  usunZKoszyka(id: number) {
    this.elementyKoszyka.update(prev => prev.filter(item => item.id !== id));
  }
}