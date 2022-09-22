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
    _doc: { _id: ownerId, name },
  } = user;
  const { data, isLoading } = inventoryQueries.useGetInventoryByUserId({ ownerId });

  const useDeleteInventory = inventoryQueries.useDeleteInventory();

  const formatedData = data && formatData(data);

  function formatData(data: Inventory[]){
    return data.map((item) => ({
      ...item,
      owner: name,
      collections: item.collections.map(({ name }) => name  ).join('\n'),
      editInventory:() => editInventory(item._id),
      deleteInvetory:() => deleteInventory(item._id)
    }));
  }

  function editInventory(_id: string){
    navigate(`/inventory/${_id}`)
  }

  async function deleteInventory(_id: string){
    console.log('delete', _id);
    try {
      const inventory = await useDeleteInventory.mutateAsync({ _id });
      // console.log(inventory);
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
      key: "owner",
      label: "Dono",
      isAction: false,
    },
    {
      key: "collections",
      label: "Coleções",
      isAction: false,
    },
    {
      key: "editInventory",
      label: "Editar",
      isAction: true,
    },
    {
      key: "deleteInventory",
      label: "Apagar",
      isAction: true,
    },
  ];  

  return (
    <>
      {formatedData && <MainTable data={formatedData} headings={headings} />}
    </>
  );
}
export default ListInventory;
