import { Collection } from "entities";

export interface CollectionGetParams extends Omit<Collection, "name" | "ownerId"> {}
export type CollectionGetResponse = Collection;

export interface CollectionGetByUserIdParams extends Omit<Collection, "_id" |  "name"> {}
export type CollectionGetByUserIdResponse = Collection[];

export interface CollectionPostParams extends Omit<Collection, "_id"> {}
export interface CollectionPostResponse {}
export interface CollectionPatchParams extends Collection {}
export interface CollectionPatchResponse {}
export interface CollectionDeleteParams extends Omit<Collection, "name" | "ownerId"> {}
export interface CollectionDeleteResponse {}