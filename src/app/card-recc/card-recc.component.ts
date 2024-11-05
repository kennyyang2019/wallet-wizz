import { Component, Input, OnInit  } from '@angular/core';
import { CCInfo, CCObj, ResultType } from '../card/card.model';

@Component({
  selector: 'app-card-recc',
  standalone: true,
  imports: [],
  templateUrl: './card-recc.component.html',
  styleUrl: './card-recc.component.css',
})
export class CardReccComponent implements OnInit {
  @Input() cards!: CCInfo;
  categories: string[] = [];
  result: ResultType = {};

  ngOnInit(): void {
    this.loadCategories();
    this.loadResults();
  }


  loadCategories() {
    this.categories = this.cards.reduce((acc: string[], curr: CCObj) => {
      for (const key in curr.rewards) {
        if (!acc.includes(key)) {
          acc.push(key);
        }
      }
      return acc;
    }, [] as string[]);
  }
  loadResults() {
    this.categories.forEach((category) => {
      // Filter and sort the cards based on cashback value in the current category
      let filteredCards = this.cards
        .filter((card) => card.rewards[category] !== undefined)
        .sort((a, b) => b.rewards[category] - a.rewards[category]) // Sort in descending order
        .slice(0, 3) // Get the top 3 cards
        .map((card) => ({
          name: card.name,
          img: card.img,
          cashback: card.rewards[category],
        }));

      this.result[category] = filteredCards;
    });
  }
  showCards() {
    console.log(this.categories);
    console.log(this.result);
    console.log(this.cards);
    this.loadCategories();
    this.loadResults();
  }
} 

