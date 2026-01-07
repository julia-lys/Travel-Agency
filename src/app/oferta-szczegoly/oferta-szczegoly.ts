import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OFERTY, Oferta } from '../oferty/oferty.data';
import { KoszykService } from '../koszyk/koszyk.service';
import { UlubioneService } from '../ulubione/ulubione.service';

@Component({
  selector: 'app-oferta-szczegoly',
  standalone: true,
  imports: [], 
  templateUrl: './oferta-szczegoly.html',
  styleUrl: './oferta-szczegoly.css',
})
export class OfertaSzczegoly implements OnInit {
  oferta: Oferta | undefined;

  constructor(
    private route: ActivatedRoute,
    private koszykService: KoszykService,
    private ulubioneService: UlubioneService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.oferta = OFERTY.find(o => o.id === id);
  }

  dodajDoKoszyka() {
    if (this.oferta) {
      this.koszykService.dodajDoKoszyka(this.oferta);
    } else {
      console.error("Nie można dodać do koszyka: Oferta nie została znaleziona.");
    }
  }

  dodajDoUlubionych() {
    if (this.oferta) {
      this.ulubioneService.dodajDoUlubionych(this.oferta);
    }
  }

}