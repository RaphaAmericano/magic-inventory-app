import {
  Grid,
  Button,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  // Checkbox,
  ListItemText,
} from "@mui/material";
import { TextInput } from "@components/TextInput";
import { useNewInventoryForm } from "./newInventoryFormHook";
import type { IFields } from "./newInventoryFormHook";
import { inventoryQueries, collectionQueries } from "@hooks/queries";
import { useStores } from "@stores/index";
import { useEffect } from "react";
import { Collection } from "entities";
import { SelectInputCheckboxBox } from "@components/SelectInputCheckboxBox";

export function NewInventoryForm() {
  const { authStore, snackBarStore } = useStores();
  const { user } = authStore;
  const { displayFeedback } = snackBarStore;

  if (!user) return null;

  const {
    _doc: { _id: ownerId },
  } = user;

  const newInventoryForm = useNewInventoryForm();

  const usePostInventory = inventoryQueries.usePostInventory();
  const { data: collections } = collectionQueries.useGetCollectionByUserId({ ownerId });

  if (!collections) return null;

  function handleChange(event: SelectChangeEvent) {
    const {
      target: { value },
    } = event;

    const ids = newInventoryForm.getValues("collections").map(({ id }) => id);

    if (ids.includes(value)) {
      const index = ids.indexOf(value);
      newInventoryForm.remove(index);
    } else {
      newInventoryForm.append({ id: value });
    }
  }

  function renderItems(collections: Collection[]) {
    const ids = newInventoryForm.getValues("collections").map(({ id }) => id);
    return collections.map(({ name, _id }) => ({ label: name, value: _id, checked: ids.includes(_id) }));
  }

  function getSelectedValuesNames(collections: Collection[]) {
    const ids = newInventoryForm.getValues("collections").map(({ id }) => id);
    return collections.filter(({ _id }) => ids.includes(_id)).map(({ name }) => name);
  }

  async function onSubmit(data: IFields) {
    const { name, collections: selectedCollections } = data;
    const collections = selectedCollections.map(({ id }) => id);
    
    try {
      const inventory = await usePostInventory.mutateAsync({ name, ownerId, collections });
      if (inventory) {
        newInventoryForm.reset();
        displayFeedback(`Inventário ${name} criado com sucesso.`);
      }
    } catch (error) {
      const { status } = error as { message: string; status: number };
      console.log(status);
      displayFeedback(`Erro ao tentar criar o inventário ${name}.`, "error");
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
          {collections && (
            <SelectInputCheckboxBox
              selectedValues={getSelectedValuesNames(collections)}
              key="collections"
              label="coleções"
              data={renderItems(collections)}
              onChangeFn={handleChange}
            />
          )}
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
