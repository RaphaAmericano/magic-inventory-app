import { Grid, Typography } from "@mui/material";
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
    <Grid container spacing={2} direction="column" p={2}>
      <Typography variant="h6">{data?.name}</Typography>
      {data && <EditCollectionForm data={data} />}
    </Grid>
  );
}
export default EditCollection;
