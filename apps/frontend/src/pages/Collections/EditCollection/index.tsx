import { collectionQueries } from "@hooks/queries";
import { useParams } from "react-router-dom";
import { EditCollectionForm } from "@components/EditCollectionForm";

type IParams = {
  id: string;
};
function EditCollection() {
  const { id: _id } = useParams<IParams>();

  if (!_id) return null;

  const { data, isLoading, isFetching } = collectionQueries.useGetCollection({ _id });
  
  return (
    <div>
      Edit {_id}
      <div>{data?.name}</div>
      {data && <EditCollectionForm data={data} />}
    </div>
  );
}
export default EditCollection;
