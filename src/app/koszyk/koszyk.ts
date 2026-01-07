import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KoszykService } from './koszyk.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-koszyk',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './koszyk.html',
  styleUrl: './koszyk.css'
})
export class Koszyk {
  constructor(public koszyk: KoszykService) {}
}