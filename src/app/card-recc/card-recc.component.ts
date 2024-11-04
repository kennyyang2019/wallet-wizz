import { Component, Input } from '@angular/core';
import { CCInfo } from '../card/card.model';

@Component({
  selector: 'app-card-recc',
  standalone: true,
  imports: [],
  templateUrl: './card-recc.component.html',
  styleUrl: './card-recc.component.css'
})
export class CardReccComponent {
  @Input() cards!: CCInfo


  showCards(){
    console.log("this is all of my cards", this.cards)
  }
}
