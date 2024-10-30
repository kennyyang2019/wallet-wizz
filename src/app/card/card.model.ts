export type Card = {
  issuer: string;
  cardName: string;
};

export type SimpleCards = {
  [issuer: string]: {
    cardId: string;
    name: string;
  };
};

type CCObj = {
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
