import { Component } from '@angular/core';
import { KRAJE } from '../destynacje.data';
import { OFERTY, Oferta } from '../oferty/oferty.data';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-strona-glowna',
  imports: [RouterLink],
  templateUrl: './strona-glowna.html',
  styleUrl: './strona-glowna.css',
})
export class StronaGlowna {
  najlepszeOferty: Oferta[] =[]
  
  ngOnInit() {
    this.najlepszeOferty = OFERTY.slice(0, 3);
  }

  listaKrajow = KRAJE;
}
