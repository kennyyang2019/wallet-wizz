
export type SimpleCards = {
    cardId: string;
    name: string;
    cardIssuer: string;
};

export type CCObj = {
  cardId: string;
  name: string;
  cardIssuer: string;
  annualFee: [string, string];
  aprInfo: string[];
  newOffer: string[];
  rewards: { [category: string]: number };
  rewardsInfo: string[];
  img: string;
};
export type CCInfo = CCObj[];

export type CardReccInfo = {
  name: string;
  img: string;
  cashback: number
}

export type ResultType = {
  [category: string]: CardReccInfo[]};