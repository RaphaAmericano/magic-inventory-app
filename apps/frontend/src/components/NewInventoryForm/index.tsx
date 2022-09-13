import { Grid, Button } from "@mui/material";
import { TextInput } from "@components/TextInput";
import { useNewInventoryForm } from "./newInventoryFormHook";
import type { IFields } from "./newInventoryFormHook";
import { authQueries } from "@hooks/queries";

export function NewInventoryForm(){
    const newInventoryForm = useNewInventoryForm();
    const useAuthUser = authQueries.useAuthUser();

    async function onSubmit(data:IFields){
        console.log(data);
    };

    function onError(error:any){
        console.log(error);
    };

    return  <form onSubmit={newInventoryForm.handleSubmit(onSubmit, onError)}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TextInput type="text" label="Nome" name="name" form={newInventoryForm}/>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" type="submit">Salvar</Button>
                    </Grid>
                </Grid>
            </form>

}