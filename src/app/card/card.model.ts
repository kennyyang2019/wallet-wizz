
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
  rewards: { [category: string]: string };
  rewardsInfo: string[];
  img: string;
};
export type CCInfo = CCObj[];
