import { Inventory } from "entities";

export interface InventoryPostParams extends Omit<Inventory, "_id"> {
    ownerId: string;
}
export interface InventoryGetParams extends Omit<Inventory, "name" |  "ownerId"> {
    
}
export interface InventoryGetByUserIdParams extends Omit<Inventory, "_id" | "name" > {
    
}

export type InventoryGetByUserIdResponse = Inventory[];
export type InventoryGetResponse = Inventory & { _v: string };

export interface InventoryDeleteParams extends Omit<Inventory,  "name" | "ownerId" > {
    
}

export interface InventoryPatchParams extends Inventory{
    
}
export interface InventoryPatchResponse {

}