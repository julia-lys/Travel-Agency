import { Component } from '@angular/core';
import { KRAJE, TYPY_WAKACJI } from '../destynacje.data';
@Component({
  selector: 'app-strona-glowna',
  imports: [],
  templateUrl: './strona-glowna.html',
  styleUrl: './strona-glowna.css',
})
export class StronaGlowna {
  listaKrajow = KRAJE;
  listaTypow = TYPY_WAKACJI;
}
