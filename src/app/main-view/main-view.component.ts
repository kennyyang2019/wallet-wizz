import { Component } from '@angular/core';
import { CCInfo, CCObj } from '../card/card.model';

import { CardComponent } from "../card/card.component";
import { NewCardComponent } from "../new-card/new-card.component";
import { CardSliderComponent } from '../card-slider/card-slider.component';
import { CardReccComponent } from '../card-recc/card-recc.component';



@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CardComponent, NewCardComponent, CardSliderComponent, CardReccComponent],
  templateUrl: './main-view.component.html',
  styleUrl: './main-view.component.css',
})
export class MainViewComponent {
  cards: CCInfo = [
    {
      name: 'Chase Sapphire Preferred Card',
      cardIssuer: 'Chase',
      annualFee: ['Annual Fee', '$95'],
      aprInfo: ['Variable APR of 21.99%–28.99%.'],
      newOffer: [
        'Earn 60,000 bonus points after spending $4,000 in the first 3 months.',
      ],
      rewards: { travel: '5%', dining: '3%', other: '1%' },
      rewardsInfo: [
        'Earn 5% on travel through Chase Ultimate Rewards',
        '3% on dining',
        '2% on all other travel',
        '1% on all other purchases',
      ],
      img: 'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/sapphire_preferred_card.png',
      cardId: 'cc7',
    },
    {
      name: 'American Express Blue Cash Everyday Card',
      cardIssuer: 'American Express',
      annualFee: ['Annual Fee', '$0'],
      aprInfo: [
        '0% intro APR on purchases for 15 months, then 18.24%–29.24% variable APR.',
      ],
      newOffer: ['Earn $200 back after spending $2,000 in the first 6 months.'],
      rewards: { groceries: '3%', gas: '2%', other: '1%' },
      rewardsInfo: [
        '3% on U.S. supermarkets (up to $6,000 per year)',
        '2% on U.S. gas stations and select department stores',
        '1% on other purchases',
      ],
      img: 'https://icm.aexp-static.com/acquisition/card-art/NUS000000305_480x304_straight_withname.png',
      cardId: 'cc8',
    },
    {
      name: 'Bank of America Travel Rewards Credit Card',
      cardIssuer: 'Bank of America',
      annualFee: ['Annual Fee', '$0'],
      aprInfo: [
        '0% intro APR for 18 billing cycles on purchases. After the intro period, a variable APR of 16.99%–26.99%.',
      ],
      newOffer: [
        'Earn 25,000 online bonus points after spending $1,000 in the first 90 days.',
      ],
      rewards: { travel: '1.5%' },
      rewardsInfo: ['Earn 1.5% for every $1 spent on all purchases'],
      img: 'https://www.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/8blm_trvsigcm_v_250x158.png',
      cardId: 'cc9',
    },
  ];
  showForm = false;
  selectedIndex!: number | undefined
  setSelectedIndex(index: number) {
    this.selectedIndex = index;
    // console.log("from mainview", index)
  }
  onStartAddCard() {
    this.selectedIndex =undefined
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
