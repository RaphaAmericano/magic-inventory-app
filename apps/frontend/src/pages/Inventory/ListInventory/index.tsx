import { MainTable } from "@components/MainTable";
import { inventoryQueries } from "@hooks/queries";
import { useStores } from "@stores/index";
import { Inventory } from "entities";
import { useNavigate } from "react-router-dom";

function ListInventory() {
  const navigate = useNavigate();
  const { authStore } = useStores();
  const { user } = authStore;

  if (!user) return null;

  const {
    _doc: { _id: ownerId },
  } = user;
  const { data, isLoading } = inventoryQueries.useGetInventoryByUserId({ ownerId });

  const useDeleteInventory = inventoryQueries.useDeleteInventory()

  const formatedData = data && formatData(data);

  function formatData(data: Inventory[]){
    return data.map((item) => ({
      ...item,
      editInventory:() => editInventory(item._id),
      deleteInvetory:() => deleteInventory(item._id)
    }));
  }

  function editInventory(_id: string){
    console.log('edit', _id);
    navigate(`/${_id}`);
  }

  async function deleteInventory(_id: string){
    console.log('delete', _id);
    try {
      const inventory = await useDeleteInventory.mutateAsync({ _id });
      console.log(inventory);
    } catch (error) {
      console.log(error);
    }
  }

  const headings = [
    {
      key: "_id",
      label: "ID",
      isAction: false,
    },
    {
      key: "name",
      label: "Nome",
      isAction: false,
    },
    {
      key: "ownerId",
      label: "Dono",
      isAction: false,
    },
    {
      key: "editInventory",
      label: "Editar",
      isAction: true,
    },
    {
      key: "deleteInvetory",
      label: "Apagar",
      isAction: true,
    },
  ];  




  return (
    <div>
      List
      {formatedData && <MainTable data={formatedData} headings={headings} />}
    </div>
  );
}
export default ListInventory;
