import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UlubioneService } from './ulubione.service';

@Component({
  selector: 'app-ulubione',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './ulubione.html',
  styleUrl: './ulubione.css'
})
export class Ulubione {
  constructor(public ulubioneService: UlubioneService) {}
}