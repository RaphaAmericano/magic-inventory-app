import { useEffect } from "react";
import { inventoryQueries } from "@hooks/queries";
import { useParams } from "react-router-dom";
import { EditInventoryForm } from "@components/EditInventoryForm";

type IParams = {
  id: string;
};
function EditInventory() {
  const { id: _id } = useParams<IParams>();

  if (!_id) return null;

  const { data, isLoading, isFetching } = inventoryQueries.useGetInventory({ _id });

  useEffect(() => { console.log(isLoading) },[isLoading]);
  useEffect(() => { console.log(isFetching) },[isFetching]);

  return (
    <div>
      Edit {_id}
      <div>{data?.name}</div>
      {data && <EditInventoryForm data={data} />}
    </div>
  );
}
export default EditInventory;
