import { Collection } from "entities";

export interface CollectionGetParams extends Omit<Collection, "name"> {}
export interface CollectionGetResponse {}
export interface CollectionPostParams extends Omit<Collection, "_id"> {}
export interface CollectionPostResponse {}
export interface CollectionPatchParams extends Collection {}
export interface CollectionPatchResponse {}
export interface CollectionDeleteParams extends Omit<Collection, "name"> {}
export interface CollectionDeleteResponse {}