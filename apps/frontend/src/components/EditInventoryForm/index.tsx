import { Grid, Button, SelectChangeEvent } from "@mui/material";
import { TextInput } from "@components/TextInput";
import { useEditInventoryForm } from "./editInventoryFormHook";
import type { IFields } from "./editInventoryFormHook";
import { collectionQueries, inventoryQueries } from "@hooks/queries";
import { useStores } from "@stores/index";
import { useNavigate } from "react-router-dom";
import { Collection, Inventory } from "entities";
import { SelectInputCheckboxBox } from "@components/SelectInputCheckboxBox";
import { useEffect } from "react";

interface IProps {
  data: Inventory;
}

export function EditInventoryForm(props: IProps) {
  const {
    data: { name, _id, collections: ownerCollections },
  } = props;

  const { authStore, snackBarStore } = useStores();
  const { user } = authStore;
  const { displayFeedback } = snackBarStore;

  if (!user) return null;

  const {
    _doc: { _id: ownerId },
  } = user;

  const { data: collections } = collectionQueries.useGetCollectionByUserId({ ownerId });
  const usePatchInventory = inventoryQueries.usePatchInventory();

  const editInventoryForm = useEditInventoryForm({
    name,
    collections: [],
  });

  useEffect(() => {
    console.log(ownerCollections);
    editInventoryForm.setValue(
      "collections",
      ownerCollections.map(({ _id }) => ({ id: _id })),
    );
  }, []);

  // useEffect(() => {
  //   const sub = editInventoryForm.watch((name, prop) => console.log(name, prop));
  //   return () => sub.unsubscribe();
  // }, [editInventoryForm.watch]);

  function handleChange(event: SelectChangeEvent) {
    const {
      target: { value },
    } = event;

    const ids = editInventoryForm.getValues("collections").map(({ id }) => id);

    if (ids.includes(value)) {
      const index = ids.indexOf(value);
      editInventoryForm.remove(index);
    } else {
      editInventoryForm.append({ id: value });
    }
  }

  function renderItems(collections: Collection[]) {
    const ids = editInventoryForm.getValues("collections").map(({ id }) => id);
    return collections.map(({ name, _id }) => ({ label: name, value: _id, checked: ids.includes(_id) }));
  }

  function getSelectedValuesNames(collections: Collection[]) {
    const ids = editInventoryForm.getValues("collections").map(({ id }) => id);
    return collections.filter(({ _id }) => ids.includes(_id)).map(({ name }) => name);
  }

  async function onSubmit(data: IFields) {
    try {
      const { name } = data;
      const inventory = await usePatchInventory.mutateAsync({ _id, name });
      if (inventory) {
        displayFeedback("Update");
        editInventoryForm.reset();
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
    <form onSubmit={editInventoryForm.handleSubmit(onSubmit, onError)}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextInput type="text" label="Nome" name="name" form={editInventoryForm} />
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
