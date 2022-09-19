import { MainTable } from "@components/MainTable";
import { collectionQueries } from "@hooks/queries";
import { useStores } from "@stores/index";
import { Collection } from "entities";
import { useNavigate } from "react-router-dom";

function ListCollection() {
  const navigate = useNavigate();
  const { authStore } = useStores();
  const { user } = authStore;

  if (!user) return null;

  const {
    _doc: { _id: ownerId },
  } = user;

  const { data, isLoading } = collectionQueries.useGetCollectionByUserId({ ownerId });

  const useDeleteCollection = collectionQueries.useDeleteCollection();
  const formatedData = data && formatData(data);

  function formatData(data: Collection[]) {
    return data.map(item => ({
      ...item,
      editCollection: () => editCollection(item._id),
      deleteCollection: () => deleteCollection(item._id),
    }));
  }
  
  function editCollection(_id: string) {
    navigate(`/collections/${_id}`);
  }

  async function deleteCollection(_id: string) {
    console.log("delete", _id);
    try {
      const collection = await useDeleteCollection.mutateAsync({ _id });
      // console.log(collection);
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
      key: "editCollection",
      label: "Editar",
      isAction: true,
    },
    {
      key: "deleteCollection",
      label: "Apagar",
      isAction: true,
    },
  ];
  return <>{formatedData && <MainTable data={formatedData} headings={headings} />}</>;
}

export default ListCollection;