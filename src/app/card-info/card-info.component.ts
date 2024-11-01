import { Component, Input, input } from '@angular/core';
import { CCObj } from '../card/card.model';

@Component({
  selector: 'app-card-info',
  standalone: true,
  imports: [],
  templateUrl: './card-info.component.html',
  styleUrl: './card-info.component.css'
})
export class CardInfoComponent {
  @Input() card!: CCObj

  showCard(){
    console.log(this.card)
  }
}
