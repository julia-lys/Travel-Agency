import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OFERTY, Oferta } from '../oferty/oferty.data';

@Component({
  selector: 'app-oferta-szczegoly',
  imports: [],
  templateUrl: './oferta-szczegoly.html',
  styleUrl: './oferta-szczegoly.css',
})
export class OfertaSzczegoly implements OnInit {
  oferta: Oferta | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Pobieramy ID z adresu URL
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // Znajdujemy odpowiednią ofertę w naszych danych
    this.oferta = OFERTY.find(o => o.id === id);
  }

}
