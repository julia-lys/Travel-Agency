import { App } from './app';
import { Routes } from '@angular/router';
import { Oferty } from './oferty/oferty';
import { ONas } from './o-nas/o-nas';
import { Logowanie } from './logowanie/logowanie';
import { Koszyk } from './koszyk/koszyk';
import { Ulubione } from './ulubione/ulubione';
import { StronaGlowna } from './strona-glowna/strona-glowna';
import { Rejestracja } from './rejestracja/rejestracja';

export const routes: Routes = [
  { path: '', component: StronaGlowna }, 
  { path: 'oferty', component: Oferty },
  { path: 'o-nas', component: ONas },
  { path: 'logowanie', component: Logowanie },
  { path: 'koszyk', component: Koszyk },
  { path: 'ulubione', component: Ulubione },
  { path: 'rejestracja', component: Rejestracja },
];