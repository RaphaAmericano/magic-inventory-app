import { Card } from "entities";
export interface CardGetParams {
    id: string;
}
export type CardGetResponse = Card;

export interface CardGetSearchParams {
    q:string;
}
export interface CardGetSearchResponse {
    object: string;
	total_cards:number;
	has_more: boolean;
    data: Card[];
} 