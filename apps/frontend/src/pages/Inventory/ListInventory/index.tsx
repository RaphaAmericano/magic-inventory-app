import { inventoryQueries } from "@hooks/queries";
import { useStores } from "@stores/index";

function ListInventory() {
  const { authStore } = useStores();
  const { user } = authStore;

  if (!user) return null;

  const { _doc: { _id:ownerId } } = user;
  const { data, isLoading } = inventoryQueries.useGetInventoryByUserId({ ownerId });
  
  return <div>List 
    {data && data.map((item) => <div>{item.name}</div>)}
  </div>;
}
export default ListInventory;
