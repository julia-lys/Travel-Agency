import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { KRAJE } from '../destynacje.data';
import { OFERTY, Oferta } from '../oferty/oferty.data';

@Component({
  selector: 'app-strona-glowna',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './strona-glowna.html',
  styleUrl: './strona-glowna.css',
})
export class StronaGlowna {
  listaKrajow = KRAJE;

  frazaWpisana = signal<string>('');

  frazaZatwierdzona = signal<string>('');

  szukaj() {
    this.frazaZatwierdzona.set(this.frazaWpisana());
    
    const element = document.getElementById('wyniki');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  filtrowaneOferty = computed(() => {
    const fraza = this.frazaZatwierdzona().toLowerCase().trim();

    if (!fraza) {
      return OFERTY.slice(0, 6); 
    }

    return OFERTY.filter((oferta) =>
      oferta.tytul.toLowerCase().includes(fraza)
    );
  });
}