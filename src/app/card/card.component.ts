import { Component, Input } from '@angular/core';
import { CCObj } from './card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() card!: CCObj;
}
