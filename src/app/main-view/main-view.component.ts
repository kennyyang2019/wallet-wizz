import { Component } from '@angular/core';
import { Card } from '../card/card.model';
import { AddCardFormComponent } from "../add-card-form/add-card-form.component";
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [AddCardFormComponent, CardComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css',
})
export class MainViewComponent {
  cards: Card[] = [];
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }
  addCard(card: Card) {
    this.cards.push(card);
    this.showForm = false;
  }
}
