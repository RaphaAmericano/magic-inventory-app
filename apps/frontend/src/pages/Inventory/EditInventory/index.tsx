import { Grid, Typography } from "@mui/material";
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
  
  return (
    <Grid container direction="column" p={2}>
      <Typography variant="h6">{data?.name}</Typography>
      {data && <EditInventoryForm data={data} />}
    </Grid>
  );
}
export default EditInventory;