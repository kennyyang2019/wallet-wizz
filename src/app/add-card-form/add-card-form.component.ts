import { Component, EventEmitter, Output } from '@angular/core';
import { Card } from '../card/card.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-card-form',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './add-card-form.component.html',
  styleUrl: './add-card-form.component.css',
})
export class AddCardFormComponent {
  title = '';
  description = '';
  @Output() cardAdded = new EventEmitter<Card>();

  submitCard() {
    const newCard: Card = {
      id: Date.now(),
      title: this.title,
      description: this.description,
    };

    this.cardAdded.emit(newCard);
    this.title = '';
    this.description = '';
  }
}
