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

const left = [
  query(':enter, :leave', style({ position: 'fixed', width: '300px' }), {
    optional: true,
  }),
  group([
    query(
      ':enter',
      [
        style({ transform: 'translateX(-200px)' }),
        animate('.3s ease-out', style({ transform: 'translateX(0%)' })),
      ],
      {
        optional: true,
      }
    ),
    query(
      ':leave',
      [
        style({ transform: 'translateX(0%)' }),
        animate('.3s ease-out', style({ transform: 'translateX(200px)' })),
      ],
      {
        optional: true,
      }
    ),
  ]),
];

const right = [
  query(':enter, :leave', style({ position: 'fixed', width: '300px' }), {
    optional: true,
  }),
  group([
    query(
      ':enter',
      [
        style({ transform: 'translateX(200px)' }),
        animate('.3s ease-out', style({ transform: 'translateX(0%)' })),
      ],
      {
        optional: true,
      }
    ),
    query(
      ':leave',
      [
        style({ transform: 'translateX(0%)' }),
        animate('.3s ease-out', style({ transform: 'translateX(-200px)' })),
      ],
      {
        optional: true,
      }
    ),
  ]),
];
@Component({
  selector: 'app-card-slider',
  standalone: true,
  imports: [],
  templateUrl: './card-slider.component.html',
  styleUrl: './card-slider.component.css',
  animations: [
    trigger('animImageSlider', [
      transition(':increment', right),
      transition(':decrement', left),
    ]),
  ],
})
export class CardSliderComponent implements OnInit {
  counter: number = 0;
  images = [
    'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/freedom_unlimited_card_alt.png',
    'https://www.nerdwallet.com/cdn-cgi/image/width=312,quality=100/cdn/images/marketplace/credit_cards/2a5d5681-8a3b-4e4c-9509-7476a4d3290d/e336c70dca87c32aab9a7bb224023d69a2e3920fa2ed2acce940f2f4f4a6956e.jpg',
    'https://icm.aexp-static.com/acquisition/card-art/NUS000000174_480x304_straight_withname.png',
    'https://ecm.capitalone.com/WCM/card/products/venture_cardart_prim_323x203-1.png',
    'https://creditcards.wellsfargo.com/W-Card-MarketPlace/v10-17-24/images/Products/ActiveCash/WF_ActiveCash_VS_Collateral_Front_RGB.png',
    'https://icm.aexp-static.com/acquisition/card-art/NUS000000264_480x304_straight_withname.png',
    'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/sapphire_preferred_card.png',
    'https://icm.aexp-static.com/acquisition/card-art/NUS000000305_480x304_straight_withname.png',
    'https://www.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8blm_trvsigcm_v_250x158.png',
    'https://ecm.capitalone.com/WCM/card/products/qs_cardart_prim_323x203.png',
    'https://www.discover.com/company/images/newsroom/media-downloads/discover-it.png',
    'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/sapphire_reserve_card.png',
    'https://ecm.capitalone.com/WCM/card/products/venturex-cg-static-card-1000x630-2.png',
    'https://icm.aexp-static.com/acquisition/card-art/NUS000000274_480x304_straight_withname.png',
    'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/ink_cash_card.png',
    'https://www.nerdwallet.com/cdn-cgi/image/width=500,quality=100/cdn/images/marketplace/credit_cards/22b9b1b4-f1c9-42a1-92d7-0480028467e8/b7459a716d88aa1694ef5d09789eab96bcbbd3f6d40e9573f888d117927663b9.jpg',
    'https://www.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/bofa_prmsigcm_255x158.png',
  ];
  @Input() currCards!: CCObj[];
  ngOnInit() {}

  showCards(){
    console.log(this.currCards)
  }
  onNext() {
    if (this.counter != this.images.length - 1) {
      this.counter++;
    }
    console.log(this.counter);
  }

  onPrevious() {
    if (this.counter > 0) {
      this.counter--;
    }
    console.log(this.counter);
  }
}
