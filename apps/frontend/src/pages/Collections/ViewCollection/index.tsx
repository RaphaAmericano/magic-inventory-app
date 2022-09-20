import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { collectionQueries } from "@hooks/queries";
import { CardGrid } from "@components/CardGrid";

type IParams = {
  id: string;
};
function ViewCollection() {
  const { id: _id } = useParams<IParams>();

  if (!_id) return null;

  const { data, isLoading, isFetching } = collectionQueries.useGetCollection({ _id });

  return (
    <Grid container spacing={2} direction="column" p={2}>
      <Typography variant="h4" sx={{ textAlign: "center"}}>{data?.name}</Typography>
      {data && <CardGrid data={data} />}
    </Grid>
  );
}
export default ViewCollection;
