import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CCObj } from './card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() card!: CCObj;
  @Input() index!: number;
  @Output() selectIndex = new EventEmitter<number>();
  sendSelectedIndex() {
    this.selectIndex.emit(this.index);
  }
}
