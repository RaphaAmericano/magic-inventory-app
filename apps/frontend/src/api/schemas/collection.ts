import { CardResume, Collection } from "entities";

export interface CollectionGetParams extends Omit<Collection, "name" | "ownerId" | "cards" | "owner"> {}
export type CollectionGetResponse = Collection;

export interface CollectionGetByUserIdParams extends Omit<Collection, "_id" |  "name" | "cards" | "owner"> {
    ownerId: string;
}
export type CollectionGetByUserIdResponse = Collection[];

export interface CollectionPostParams extends Omit<Collection, "_id" | "cards" | "owner"> {
    ownerId: string;
}
export interface CollectionPostResponse {}
export interface CollectionPatchParams extends Omit<Collection, "owner" | "cards"> {
    ownerId: string;
    cards: CardResume[]
}
export interface CollectionPatchResponse {}
export interface CollectionDeleteParams extends Omit<Collection, "name" | "ownerId" | "cards" | "owner"> {}
export interface CollectionDeleteResponse {}