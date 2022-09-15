import { Grid, Button } from "@mui/material";
import { TextInput } from "@components/TextInput";
import { useEditCollectionForm } from "./editCollectionFormHook";
import type { IFields } from "./editCollectionFormHook";
import { collectionQueries } from "@hooks/queries";
import { useStores } from "@stores/index";
import { useNavigate } from "react-router-dom";
import { Collection } from "entities";

interface IProps {
  data: Collection;
}

export function EditCollectionForm(props: IProps) {
  const {
    data: { name, _id },
  } = props;
  
  const { authStore, snackBarStore } = useStores();
  const { user } = authStore;
  const { displayFeedback } = snackBarStore;

  if (!user) return null;

  const {
    _doc: { _id: ownerId },
  } = user;

  const editCollectionForm = useEditCollectionForm({ name });

  const usePatchCollection = collectionQueries.usePatchCollection();

  async function onSubmit(data: IFields) {
    try {
      const { name } = data;
      const collection = await usePatchCollection.mutateAsync({ _id, name, ownerId });
      if (collection) {
        displayFeedback("Update");
        editCollectionForm.reset();
      }
    } catch (error) {
      const { status } = error as { message: string; status: number };
      console.log(status);
      displayFeedback("Erro", "error");
    }
  }

  function onError(error: any) {
    console.log(error);
  }

  return (
    <form onSubmit={editCollectionForm.handleSubmit(onSubmit, onError)}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextInput type="text" label="Nome" name="name" form={editCollectionForm} />
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
