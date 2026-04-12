export interface GiftCard {
  id: string;
  name: string;
  image: string;
  category: string;
}

export interface GiftCardCategory {
  id: string;
  name: string;
  cards: GiftCard[];
}
