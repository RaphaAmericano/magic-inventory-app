import { Inventory } from "entities";

export interface InventoryPostParams extends Omit<Inventory, "_id" | "owner"> {
    ownerId: string;
}
export interface InventoryGetParams extends Omit<Inventory, "name" |  "owner"> {
    
}
export interface InventoryGetByUserIdParams extends Omit<Inventory, "_id" | "name" |  "owner"> {
    ownerId: string;
}

export type InventoryGetByUserIdResponse = Inventory[];
export type InventoryGetResponse = Inventory & { _v: string };

export interface InventoryDeleteParams extends Omit<Inventory,  "name" | "ownerId" | "owner"> {
    
}

export interface InventoryPatchParams extends Omit<Inventory, "owner" >{
    ownerId: string;
}
export interface InventoryPatchResponse {

}