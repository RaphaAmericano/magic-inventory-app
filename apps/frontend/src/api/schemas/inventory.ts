import { Inventory } from "entities";

export interface InventoryPostParams extends Omit<Inventory, "_id" | "owner" | "collections"> {
  ownerId: string;
  collections: string[];
}
export interface InventoryGetParams extends Omit<Inventory, "name" | "owner" | "collections"> {}
export interface InventoryGetByUserIdParams extends Omit<Inventory, "_id" | "name" | "owner" | "collections"> {
  ownerId: string;
}

export type InventoryGetByUserIdResponse = Inventory[];
export type InventoryGetResponse = Inventory & { _v: string };

export interface InventoryDeleteParams extends Omit<Inventory, "name" | "ownerId" | "owner" | "collections"> {}

export interface InventoryPatchParams extends Omit<Inventory, "owner" | "collections"> {
  collections: string[];
}
export interface InventoryPatchResponse {}
