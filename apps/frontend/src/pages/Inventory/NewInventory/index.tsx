import { Container, Grid, Typography, Button } from "@mui/material";
import { NewInventoryForm } from "@components/NewInventoryForm";

function NewInventory(){
    return <>
            <Typography>Inventário</Typography>
            <NewInventoryForm />
        </>     
}
export default NewInventory;