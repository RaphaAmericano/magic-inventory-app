import { Inventory } from "entities";

export interface InventoryCreateParams extends Omit<Inventory, "_id"> {
    ownerId: string;
}

export interface InventoryGetByUserIdParams extends Omit<Inventory, "_id" | "name" > {
    ownerId: string;
}

export type InventoryGetByUserIdResponse = Inventory[];