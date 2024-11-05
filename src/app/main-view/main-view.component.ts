import { Component } from '@angular/core';
import { CCInfo, CCObj } from '../card/card.model';

import { CardComponent } from "../card/card.component";
import { NewCardComponent } from "../new-card/new-card.component";
import { CardSliderComponent } from '../card-slider/card-slider.component';
import { CardReccComponent } from '../card-recc/card-recc.component';



@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [
    CardComponent,
    NewCardComponent,
    CardSliderComponent,
    CardReccComponent,
  ],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css',
})
export class MainViewComponent {
  cards: CCInfo = [
    // {
    //   name: 'Capital One Quicksilver Cash Rewards Credit Card',
    //   cardIssuer: 'Capital One',
    //   annualFee: ['Annual Fee', '$0'],
    //   aprInfo: [
    //     '0% intro APR on purchases and balance transfers for 15 months; 19.99%–29.99% variable APR afterward.',
    //   ],
    //   newOffer: [
    //     'Earn a one-time $200 cash bonus after spending $500 in the first 3 months.',
    //   ],
    //   rewards: { allOtherPurchases: 1.5 },
    //   rewardsInfo: ['Earn unlimited 1.5% cash back on every purchase'],
    //   img: 'https://ecm.capitalone.com/WCM/card/products/qs_cardart_prim_323x203.png',
    //   cardId: 'cc10',
    // },
    // {
    //   name: 'Chase Sapphire Reserve',
    //   cardIssuer: 'Chase',
    //   annualFee: ['Annual Fee', '$550'],
    //   aprInfo: ['Variable APR of 22.99%–29.99%.'],
    //   newOffer: [
    //     'Earn 60,000 bonus points after spending $4,000 in the first 3 months.',
    //   ],
    //   rewards: { travel: 10, dining: 3, allOtherPurchases: 1 },
    //   rewardsInfo: [
    //     '10% on travel through Chase Ultimate Rewards',
    //     '3% on dining',
    //     '1% on other purchases',
    //   ],
    //   img: 'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/sapphire_reserve_card.png',
    //   cardId: 'cc12',
    // },
  ];
  showForm = false;
  selectedIndex!: number | undefined;
  
  setSelectedIndex(index: number) {
    this.selectedIndex = index;
    // console.log("from mainview", index)
  }
  onStartAddCard() {
    this.selectedIndex = undefined;
   this.showForm = true;
  }
  onCloseAddCard() {
    this.showForm = false;
  }
  addCard(card: CCObj) {
    this.cards.push(card);
    this.showForm = false;
  }

  
}
