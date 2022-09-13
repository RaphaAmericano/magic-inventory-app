import { inventorySchema } from "../schemas";
import service from "../service";

export async function createInventory(params: inventorySchema.InventoryCreateParams) {
  return service.post<never>("/inventorys", { ...params });
}

export async function getInventoryByUserId(params: inventorySchema.InventoryGetByUserIdParams) {
  const { ownerId } = params;
  return service.get<never, inventorySchema.InventoryGetByUserIdResponse>(`/inventorys/user/${ownerId}`);
}

