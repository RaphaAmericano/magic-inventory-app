import { inventorySchema } from "../schemas";
import service from "../service";

export async function createInventory(params: inventorySchema.InventoryCreateParams) {
  return service.post<never>("/inventorys", { ...params });
}