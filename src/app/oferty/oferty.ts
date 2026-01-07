import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OFERTY, Oferta } from './oferty.data';
import { KRAJE } from '../destynacje.data';
import { KoszykService } from '../koszyk/koszyk.service';

@Component({
  selector: 'app-oferty',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './oferty.html',
  styleUrl: './oferty.css',
})
export class Oferty {

  constructor(private koszykService: KoszykService) {}

  dodajWycieczke(oferta: Oferta) {
    this.koszykService.dodajDoKoszyka(oferta);
  }

  listaKrajow = KRAJE;

  frazaWpisana = signal<string>('');

  frazaZatwierdzona = signal<string>('');

  filtrowaneOferty = computed(() => {
    const filtr = this.frazaZatwierdzona().toLowerCase().trim();

    if (!filtr) {
      return OFERTY; 
    }

    return OFERTY.filter(oferta =>
      oferta.tytul.toLowerCase().includes(filtr)
    );
  });

  szukaj() {
    this.frazaZatwierdzona.set(this.frazaWpisana());
  }

  wyczyscFiltry() {
    this.frazaWpisana.set('');
    this.frazaZatwierdzona.set('');
  }
}