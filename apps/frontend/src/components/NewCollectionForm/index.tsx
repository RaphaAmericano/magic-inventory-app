import { Grid, Button } from "@mui/material";
import { TextInput } from "@components/TextInput";
import { useStores } from "@stores/index";
import { useNewCollectionForm } from "./newCollectionFormHook";
import type { IFields } from "./newCollectionFormHook";
import { collectionQueries } from "@hooks/queries";

export function NewCollectionForm() {
  const { authStore, snackBarStore } = useStores();
  const { user } = authStore;
  const { displayFeedback } = snackBarStore;

  if (!user) return null;

  const {
    _doc: { _id: ownerId },
  } = user;

  const newCollectionForm = useNewCollectionForm();

  const usePostCollection = collectionQueries.usePostCollection();

  async function onSubmit(data: IFields) {
    const { name } = data;
    try {
      const collection = await usePostCollection.mutateAsync({ name, ownerId });
      if (collection) {
        newCollectionForm.reset();
        displayFeedback(`Coleção ${name} criado com sucesso.`);
      }
    } catch (error) {
      const { status } = error as { message: string; status: number };
      console.log(status);
      displayFeedback(`Erro ao tentar criar a coleção ${name}.`, "error");
    }
  }

  function onError(error: any) {
    console.log(error);
  }

  return (
    <form onSubmit={newCollectionForm.handleSubmit(onSubmit, onError)}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
            <TextInput type="text" label="Nome" name="name" form={newCollectionForm} />
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
