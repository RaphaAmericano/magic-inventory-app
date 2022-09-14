import { useMutation, useQuery } from "react-query";
import { inventorySchema } from "../../api/schemas";
import { inventoryRequests } from "../../api/requests";

export function useCreateInventory() {
  const mutation = useMutation<unknown, unknown, inventorySchema.InventoryCreateParams>(
    inventoryRequests.createInventory,
  );
  return mutation;
}

export function useGetInventoryById() {}

export function useGetInventoryByUserId(params?: inventorySchema.InventoryGetByUserIdParams) {
  async function requestFn() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return inventoryRequests.getInventoryByUserId(params!);
  }

  const query = useQuery<inventorySchema.InventoryGetByUserIdResponse>(["get-user-inventorys", params], requestFn, {
    enabled: Boolean(params),
    staleTime: 4000,
  });

  return query;
}

export function usePatchInventory(){
  const mutation = useMutation<unknown, unknown, inventorySchema.InventoryPatchParams>(inventoryRequests.patchInventory);

  return mutation;
}

export function useDeleteInventory(){
  const mutation = useMutation<unknown, unknown, inventorySchema.InventoryDeleteParams>(inventoryRequests.deleteInventory);

  return mutation;
}
