import { User } from "./user";
import { Card } from "./card";
export interface CardResume {
  id: string;
  quantity: number;
}
export type CardData = Card & CardResume;

export interface Collection {
  _id: string;
  owner: User;
  name: string;
  cards: CardData[];
}

export type CollectionResume = string[]
