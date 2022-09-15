import { Grid, Button } from "@mui/material";
import { TextInput } from "@components/TextInput";
import { useEditInventoryForm } from "./editInventoryFormHook";
import type { IFields } from "./editInventoryFormHook";
import { inventoryQueries } from "@hooks/queries";
import { useStores } from "@stores/index";
import { useNavigate } from "react-router-dom";
import { Inventory } from "entities";

interface IProps {
  data: Inventory;
}

export function EditInventoryForm(props: IProps) {
  const { data } = props;
  const navigate = useNavigate();
  const { authStore } = useStores();
  const { user } = authStore;

  if (!user) return null;

  const {
    _doc: { _id: ownerId },
  } = user;

  const editInventoryForm = useEditInventoryForm(data);

  const usePatchInventory = inventoryQueries.usePatchInventory();

  async function onSubmit(data: IFields) {
    try {
      const { name, _id, ownerId } = data;
      const inventory = await usePatchInventory.mutateAsync({ _id, name, ownerId });
      if (inventory) {
        editInventoryForm.reset();
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
    <form onSubmit={editInventoryForm.handleSubmit(onSubmit, onError)}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextInput type="text" label="Nome" name="name" form={editInventoryForm} />
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
