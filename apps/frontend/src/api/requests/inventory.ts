import { inventorySchema } from "../schemas";
import service from "../service";

export async function createInventory(params: inventorySchema.InventoryCreateParams) {
  return service.post<never>("/inventorys", { ...params });
}

export async function getInventory(params: inventorySchema.InventoryGetParams) {
  const { _id } = params;
  return service.get<never, inventorySchema.InventoryGetResponse>(`/inventorys/${_id}`);
}

export async function getInventoryByUserId(params: inventorySchema.InventoryGetByUserIdParams) {
  const { ownerId } = params;
  return service.get<never, inventorySchema.InventoryGetByUserIdResponse>(`/inventorys/user/${ownerId}`);
}

export async function deleteInventory(params: inventorySchema.InventoryDeleteParams){
  const { _id } = params;
  return service.delete<never>(`/inventorys/${_id}`)
}

export async function patchInventory(params: inventorySchema.InventoryPatchParams){
  const { _id, ...restParams } = params;
  return service.patch<never, inventorySchema.InventoryPatchResponse>(`/inventorys/${_id}`, { ...restParams })
}