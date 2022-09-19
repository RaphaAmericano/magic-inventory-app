export interface Collection {
  _id: string;
  ownerId: string;
  name: string;
  cards: { id: string; quantity: number }[];
}
