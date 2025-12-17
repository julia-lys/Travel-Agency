import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OFERTY } from './oferty.data';
@Component({
  selector: 'app-oferty',
  imports: [RouterLink],
  templateUrl: './oferty.html',
  styleUrl: './oferty.css',
})
export class Oferty {
 listaOfert = OFERTY;
}
