import { User } from "./user";

export interface CardResume {
  id: string;
  quantity: number;
}

export interface Collection {
  _id: string;
  owner: User;
  name: string;
  cards: CardResume[];
}
