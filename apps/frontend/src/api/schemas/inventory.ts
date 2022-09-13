import { Inventory } from "entities";

export interface InventoryCreateParams extends Omit<Inventory, "_id">{
    ownerId: string;
}