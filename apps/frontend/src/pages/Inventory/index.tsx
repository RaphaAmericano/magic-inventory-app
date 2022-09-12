import { PageMenu } from "@components/PageMenu";
import { Container, Grid, Paper,  Typography } from "@mui/material";
import css from "./style.module.scss";

function Inventory(){

    const subMenus = [
        { text: 'Inventários', to: 'list' },
        { text: 'Novo', to: 'new' }
    ]

    return <Container>
            <Grid container spacing={2}>
                <Grid item xs={12}><Typography variant="h4">Inventário</Typography></Grid>
                <Grid item xs={12}><Paper><PageMenu menu={subMenus} /></Paper></Grid>
                <Grid item xs={12}><Paper>Tabela</Paper></Grid>
            </Grid>
        </Container>
}
export default Inventory;