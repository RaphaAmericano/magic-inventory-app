import { User } from "./user";

export interface Inventory {
    _id: string;
    owner: User;
    name: string;
    // collections: any[]
}