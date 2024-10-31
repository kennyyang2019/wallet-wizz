import { Component } from '@angular/core';
import { CCInfo, CCObj } from '../card/card.model';

import { CardComponent } from "../card/card.component";
import { NewCardComponent } from "../new-card/new-card.component";


const creditCards: CCInfo = [
  {
    name: 'Chase Freedom Unlimited',
    cardIssuer: 'Chase',
    annualFee: ['Annual Fee', '$0'],
    aprInfo: [
      '0% intro APR for 15 months from account opening on purchases and balance transfers. After the intro period, a variable APR of 19.99%–28.74%. Balance transfer fee applies.',
    ],
    newOffer: [
      'NEW CARDMEMBER OFFER',
      'Earn a $200 bonus after spending $500 in the first 3 months from account opening.',
    ],
    rewards: { dining: '3%', drugstore: '3%', travel: '5%', other: '1.5%' },
    rewardsInfo: [
      'Earn 5% on travel through Chase Travel',
      '3% on dining and drugstores',
      '1.5% on all other purchases',
    ],
    img: 'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/freedom_unlimited_card_alt.png',
    cardId: 'cc1',
  },
  {
    name: 'Citi Double Cash Card',
    cardIssuer: 'Citi',
    annualFee: ['Annual Fee', '$0'],
    aprInfo: [
      '0% intro APR for 18 months on balance transfers. After the intro period, a variable APR of 18.24%–28.24%.',
    ],
    newOffer: [
      'INTRO OFFER',
      'Earn cash back twice: 1% when you buy and 1% as you pay.',
    ],
    rewards: { allPurchases: '2%' },
    rewardsInfo: [
      'Earn 1% cash back on purchases',
      '1% as you pay for those purchases',
    ],
    img: 'https://www.nerdwallet.com/cdn-cgi/image/width=312,quality=100/cdn/images/marketplace/credit_cards/2a5d5681-8a3b-4e4c-9509-7476a4d3290d/e336c70dca87c32aab9a7bb224023d69a2e3920fa2ed2acce940f2f4f4a6956e.jpg',
    cardId: 'cc2',
  },
  {
    name: 'American Express Gold Card',
    cardIssuer: 'American Express',
    annualFee: ['Annual Fee', '$250'],
    aprInfo: ['APR varies based on payment plan. Terms apply.'],
    newOffer: [
      'Earn 60,000 Membership Rewards Points after spending $4,000 in the first 6 months.',
    ],
    rewards: { dining: '4%', travel: '3%', other: '1%' },
    rewardsInfo: [
      '4% points on restaurants',
      '3% points on flights',
      '1% on other purchases',
    ],
    img: 'https://icm.aexp-static.com/acquisition/card-art/NUS000000174_480x304_straight_withname.png',
    cardId: 'cc3',
  },
  {
    name: 'Capital One Venture Rewards Credit Card',
    cardIssuer: 'Capital One',
    annualFee: ['Annual Fee', '$95'],
    aprInfo: ['Variable APR of 20.99%–28.99%.'],
    newOffer: [
      'Earn 75,000 bonus miles after spending $4,000 in the first 3 months.',
    ],
    rewards: { travel: '5%', allPurchases: '2%' },
    rewardsInfo: [
      'Earn 5% on hotels and rental cars through Capital One Travel',
      '2% on all other purchases',
    ],
    img: 'https://ecm.capitalone.com/WCM/card/products/venture_cardart_prim_323x203-1.png',
    cardId: 'cc4',
  },
  {
    name: 'Wells Fargo Active Cash Card',
    cardIssuer: 'Wells Fargo',
    annualFee: ['Annual Fee', '$0'],
    aprInfo: [
      '0% intro APR for 15 months on purchases and balance transfers. Variable APR of 19.99%–29.99% afterward.',
    ],
    newOffer: [
      'Earn a $200 cash rewards bonus after spending $1,000 in the first 3 months.',
    ],
    rewards: { allPurchases: '2%' },
    rewardsInfo: ['Earn unlimited 2% cash rewards on purchases'],
    img: 'https://creditcards.wellsfargo.com/W-Card-MarketPlace/v10-17-24/images/Products/ActiveCash/WF_ActiveCash_VS_Collateral_Front_RGB.png',
    cardId: 'cc5',
  },
  {
    name: 'American Express Blue Cash Preferred Card',
    cardIssuer: 'American Express',
    annualFee: ['Annual Fee', '$95 (waived first year)'],
    aprInfo: [
      '0% intro APR on purchases for 12 months. 18.24%–28.24% variable APR after.',
    ],
    newOffer: ['Earn $250 back after spending $3,000 in the first 6 months.'],
    rewards: { groceries: '6%', gas: '3%', transit: '3%', other: '1%' },
    rewardsInfo: [
      '6% on U.S. supermarkets (up to $6,000 per year)',
      '3% on transit',
      '3% on U.S. gas stations',
      '1% on other purchases',
    ],
    img: 'https://icm.aexp-static.com/acquisition/card-art/NUS000000264_480x304_straight_withname.png',
    cardId: 'cc6',
  },
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
  {
    name: 'Capital One Quicksilver Cash Rewards Credit Card',
    cardIssuer: 'Capital One',
    annualFee: ['Annual Fee', '$0'],
    aprInfo: [
      '0% intro APR on purchases and balance transfers for 15 months; 19.99%–29.99% variable APR afterward.',
    ],
    newOffer: [
      'Earn a one-time $200 cash bonus after spending $500 in the first 3 months.',
    ],
    rewards: { allPurchases: '1.5%' },
    rewardsInfo: ['Earn unlimited 1.5% cash back on every purchase'],
    img: 'https://ecm.capitalone.com/WCM/card/products/qs_cardart_prim_323x203.png',
    cardId: 'cc10',
  },
  {
    name: 'Discover it Cash Back',
    cardIssuer: 'Discover',
    annualFee: ['Annual Fee', '$0'],
    aprInfo: [
      '0% intro APR for 15 months on purchases. Variable APR of 15.74%–26.74% afterward.',
    ],
    newOffer: [
      'Cashback Match: Discover will match all the cash back you’ve earned at the end of your first year.',
    ],
    rewards: { allPurchases: '1%' },
    rewardsInfo: ['Earn 1% cash back on all purchases'],
    img: 'https://www.discover.com/company/images/newsroom/media-downloads/discover-it.png',
    cardId: 'cc11',
  },
  {
    name: 'Chase Sapphire Reserve',
    cardIssuer: 'Chase',
    annualFee: ['Annual Fee', '$550'],
    aprInfo: ['Variable APR of 22.99%–29.99%.'],
    newOffer: [
      'Earn 60,000 bonus points after spending $4,000 in the first 3 months.',
    ],
    rewards: { travel: '10%', dining: '3%', other: '1%' },
    rewardsInfo: [
      '10% on travel through Chase Ultimate Rewards',
      '3% on dining',
      '1% on other purchases',
    ],
    img: 'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/sapphire_reserve_card.png',
    cardId: 'cc12',
  },
  {
    name: 'Capital One Venture X Rewards Credit Card',
    cardIssuer: 'Capital One',
    annualFee: ['Annual Fee', '$395'],
    aprInfo: ['Variable APR of 21.99%–28.99%.'],
    newOffer: [
      'Earn 75,000 miles after spending $4,000 in the first 3 months.',
    ],
    rewards: { travel: '10%', allPurchases: '2%' },
    rewardsInfo: [
      '10% on hotels and rental cars through Capital One Travel',
      '2% on all other purchases',
    ],
    img: 'https://ecm.capitalone.com/WCM/card/products/venturex-cg-static-card-1000x630-2.png',
    cardId: 'cc13',
  },
  {
    name: 'American Express Green Card',
    cardIssuer: 'American Express',
    annualFee: ['Annual Fee', '$150'],
    aprInfo: ['Variable APR of 20.99%–27.99%.'],
    newOffer: [
      'Earn 45,000 Membership Rewards Points after spending $2,000 in the first 6 months.',
    ],
    rewards: { travel: '3%', transit: '3%', other: '1%' },
    rewardsInfo: ['3% on travel and transit', '1% on all other purchases'],
    img: 'https://icm.aexp-static.com/acquisition/card-art/NUS000000274_480x304_straight_withname.png',
    cardId: 'cc14',
  },
  {
    name: 'Chase Ink Business Cash Credit Card',
    cardIssuer: 'Chase',
    annualFee: ['Annual Fee', '$0'],
    aprInfo: [
      '0% intro APR on purchases for 12 months. Variable APR of 18.24%–24.24% after.',
    ],
    newOffer: [
      'Earn $750 bonus cash back after spending $6,000 in the first 3 months.',
    ],
    rewards: {
      officeSupplies: '5%',
      internet: '5%',
      dining: '2%',
      gas: '2%',
      other: '1%',
    },
    rewardsInfo: [
      '5% on office supplies and internet services',
      '2% on dining and gas',
      '1% on all other purchases',
    ],
    img: 'https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/ink_cash_card.png',
    cardId: 'cc15',
  },
  {
    name: 'Citi Rewards+ Card',
    cardIssuer: 'Citi',
    annualFee: ['Annual Fee', '$0'],
    aprInfo: [
      '0% intro APR on balance transfers for 15 months. After that, a variable APR of 18.24%–28.24% applies.',
    ],
    newOffer: [
      'Earn 20,000 ThankYou Points after spending $1,500 in the first 3 months.',
    ],
    rewards: { dining: '2%', supermarkets: '2%', other: '1%' },
    rewardsInfo: [
      '2% at supermarkets and restaurants',
      '1% on all other purchases',
      '10% points back on the first 100,000 ThankYou Points redeemed per year',
    ],
    img: 'https://www.nerdwallet.com/cdn-cgi/image/width=500,quality=100/cdn/images/marketplace/credit_cards/22b9b1b4-f1c9-42a1-92d7-0480028467e8/b7459a716d88aa1694ef5d09789eab96bcbbd3f6d40e9573f888d117927663b9.jpg',
    cardId: 'cc16',
  },
  {
    name: 'Bank of America Premium Rewards Credit Card',
    cardIssuer: 'Bank of America',
    annualFee: ['Annual Fee', '$95'],
    aprInfo: ['Variable APR of 18.24%–25.24%.'],
    newOffer: [
      'Earn 50,000 online bonus points after spending $3,000 in the first 90 days.',
    ],
    rewards: { travel: '2%', dining: '2%', other: '1.5%' },
    rewardsInfo: [
      '2% on travel and dining',
      '1.5% on all other purchases',
      'Earn 1.5 points on all other purchases',
    ],
    img: 'https://www.bankofamerica.com/content/images/ContextualSiteGraphics/CreditCardArt/en_US/Approved_PCM/bofa_prmsigcm_255x158.png',
    cardId: 'cc17',
  },
];
@Component({
  selector: 'app-main-view',
  standalone: true,
  imports: [CardComponent, NewCardComponent],
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

  onStartAddCard() {
    this.showForm = true;
  }
  onCloseAddCard() {
    this.showForm = false;
  }
  addCard(card: CCObj) {
    console.log('hello I receive the card:::::', card);
    this.cards.push(card);
    this.showForm = false;
  }
 
  
}
