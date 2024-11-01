import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  transition,
  query,
  style,
  animate,
  group,
} from '@angular/animations';

import { CCObj } from '../card/card.model';
import { CardInfoComponent } from '../card-info/card-info.component';

// const left = [
//   query(':enter, :leave', style({ position: 'fixed', width: '300px' }), {
//     optional: true,
//   }),
//   group([
//     query(
//       ':enter',
//       [
//         style({ transform: 'translateX(-200px)' }),
//         animate('.3s ease-out', style({ transform: 'translateX(0%)' })),
//       ],
//       {
//         optional: true,
//       }
//     ),
//     query(
//       ':leave',
//       [
//         style({ transform: 'translateX(0%)' }),
//         animate('.3s ease-out', style({ transform: 'translateX(200px)' })),
//       ],
//       {
//         optional: true,
//       }
//     ),
//   ]),
// ];

// const right = [
//   query(':enter, :leave', style({ position: 'fixed', width: '300px' }), {
//     optional: true,
//   }),
//   group([
//     query(
//       ':enter',
//       [
//         style({ transform: 'translateX(200px)' }),
//         animate('.3s ease-out', style({ transform: 'translateX(0%)' })),
//       ],
//       {
//         optional: true,
//       }
//     ),
//     query(
//       ':leave',
//       [
//         style({ transform: 'translateX(0%)' }),
//         animate('.3s ease-out', style({ transform: 'translateX(-200px)' })),
//       ],
//       {
//         optional: true,
//       }
//     ),
//   ]),
// ];
@Component({
  selector: 'app-card-slider',
  standalone: true,
  imports: [CardInfoComponent],
  templateUrl: './card-slider.component.html',
  styleUrl: './card-slider.component.css',
  // animations: [
  //   trigger('animImageSlider', [
  //     transition(':increment', right),
  //     transition(':decrement', left),
  //   ]),
  // ],
})
export class CardSliderComponent implements OnInit {
  @Input() currCards!: CCObj[];
  @Input() index!: number;
  ngOnInit() {}

  // showCards(){
  //   console.log(this.currCards[this.index])
  // }
  // onNext() {
  //   if (this.counter != this.images.length - 1) {
  //     this.counter++;
  //   }
  //   console.log(this.counter);
  // }

  // onPrevious() {
  //   if (this.counter > 0) {
  //     this.counter--;
  //   }
  //   console.log(this.counter);
  // }
}
