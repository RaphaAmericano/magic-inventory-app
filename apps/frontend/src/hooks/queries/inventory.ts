import { useMutation, useQuery } from "react-query";
import { inventorySchema } from "../../api/schemas";
import { inventoryRequests } from "../../api/requests";

export function useCreateInventory() {
  const mutation = useMutation<unknown, unknown, inventorySchema.InventoryCreateParams>(
    inventoryRequests.createInventory,
  );
  return mutation;
}
