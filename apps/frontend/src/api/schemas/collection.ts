import { Collection } from "entities";

export interface CollectionGetParams extends Omit<Collection, "name" | "ownerId" | "cards"> {}
export type CollectionGetResponse = Collection;

export interface CollectionGetByUserIdParams extends Omit<Collection, "_id" |  "name" | "cards"> {}
export type CollectionGetByUserIdResponse = Collection[];

export interface CollectionPostParams extends Omit<Collection, "_id" | "cards"> {}
export interface CollectionPostResponse {}
export interface CollectionPatchParams extends Collection {
    cards: {id: string; quantity: number }[]
}
export interface CollectionPatchResponse {}
export interface CollectionDeleteParams extends Omit<Collection, "name" | "ownerId" | "cards"> {}
export interface CollectionDeleteResponse {}