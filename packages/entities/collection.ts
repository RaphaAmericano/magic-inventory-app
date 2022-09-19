export interface CardResume {
  id: string;
  quantity: number;
}

export interface Collection {
  _id: string;
  ownerId: string;
  name: string;
  cards: CardResume[];
}
