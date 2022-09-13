import { Grid, Button } from "@mui/material";
import { TextInput } from "@components/TextInput";
import { useNewInventoryForm } from "./newInventoryFormHook";
import type { IFields } from "./newInventoryFormHook";
import { inventoryQueries } from "@hooks/queries";
import { useStores } from "@stores/index";
import { useNavigate } from "react-router-dom";

export function NewInventoryForm() {
  const navigate = useNavigate();
  const { authStore } = useStores();
  const { user } = authStore;

  if(!user) return null;

  const { _doc: { _id:ownerId } } = user;

  const newInventoryForm = useNewInventoryForm();

  const useCreateInventory = inventoryQueries.useCreateInventory();

  async function onSubmit(data: IFields) {
    console.log(data);
    try {
      const { name } = data;
      const inventory = await useCreateInventory.mutateAsync({ name, ownerId });
      if(inventory){
        newInventoryForm.reset();
      }
    } catch (error) {
      const { status } = error as { message: string; status: number };
      console.log(status);
    }
  }

  function onError(error: any) {
    console.log(error);
  }

  return (
    <form onSubmit={newInventoryForm.handleSubmit(onSubmit, onError)}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextInput type="text" label="Nome" name="name" form={newInventoryForm} />
        </Grid>
        <Grid item>
          <Button variant="outlined" type="submit">
            Salvar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
