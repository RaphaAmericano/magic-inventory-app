import { PageMenu } from "@components/PageMenu";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import css from "./style.module.scss";

function Collection() {
  const subMenus = [
    { text: "Coleções", to: "list" },
    { text: "Nova", to: "new" },
  ];
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4">Coleções</Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <PageMenu menu={subMenus} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
                <Outlet />
            </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Collection;
