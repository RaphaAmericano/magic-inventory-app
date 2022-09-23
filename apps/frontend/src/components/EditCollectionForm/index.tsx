import { ChangeEvent, useEffect, useState, useRef } from "react";
import { Grid, Button, CircularProgress, TableContainer, Table, TableBody } from "@mui/material";
import { TextInput } from "@components/TextInput";
import { useEditCollectionForm } from "./editCollectionFormHook";
import type { IFields } from "./editCollectionFormHook";
import { cardQueries, collectionQueries } from "@hooks/queries";
import { useStores } from "@stores/index";
import { Collection } from "entities";
import { SearchInput } from "@components/SearchInput";
import { useDebouce } from "@hooks/helpers/debouce";
import { CardsTable } from "@pages/Collections/CardsTable";
import { EditItemField } from "./EditItemField";

interface IProps {
  data: Collection;
}

export function EditCollectionForm(props: IProps) {
  const {
    data: { name, _id, cards },
  } = props;

  const { authStore, snackBarStore, cardStore } = useStores();
  const { user } = authStore;
  const { displayFeedback } = snackBarStore;
  const { updateCache } = cardStore;
  if (!user) return null;

  const {
    _doc: { _id: ownerId },
  } = user;
  
  const [query, setQuery] = useState("");
  const searchQuery = useDebouce(query, 400);

  const { data, isLoading  } = cardQueries.useGetCardSearch({ q: searchQuery });

  useEffect(() => {
    if(data){
      updateCache(data.data)
    }
  },[isLoading])

  const editCollectionForm = useEditCollectionForm();
  const watchShowCards = editCollectionForm.watch("cards", []);

  useEffect(() => {
    editCollectionForm.setValue("name", name);
    editCollectionForm.setValue("cards", cards);
  }, []);

  // useEffect(() => {
  //   const subscription = editCollectionForm.watch((value, { name, type }) => console.log(value, name, type));
  //   return () => subscription.unsubscribe();
  // }, [editCollectionForm.watch]);

  const usePatchCollection = collectionQueries.usePatchCollection();

  async function onSubmit(data: IFields) {
    try {
      const { name, cards } = data;
      const collection = await usePatchCollection.mutateAsync({ _id, name, ownerId, cards });
      if (collection) {
        displayFeedback("Update");
        // editCollectionForm.reset();
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

  function search(event: ChangeEvent<HTMLInputElement>) {
    const {
      target: { value },
    } = event;
    setQuery(value);
  }

  function cleanSearchQuery() {
    // if (searchInputRef.current) {
    setQuery("");
    // searchInputRef.current.value = "";
    // }
  }

  function findCard(id: string) {
    return editCollectionForm.getValues("cards").find(value => value.id === id);
  }

  function setCardsQuantity(id: string, quantity: number) {
    const cards = editCollectionForm.getValues("cards");
    const index = cards.map(card => card.id).indexOf(id);
    cards[index] = { ...cards[index], quantity };
    editCollectionForm.replace(cards);
  }

  function add(id: string) {
    const card = findCard(id);
    if (card) {
      setCardsQuantity(card.id, card.quantity + 1);
    } else {
      editCollectionForm.append({ id, quantity: 1 });
    }
  }

  function remove(id: string) {
    const card = findCard(id);
    if (card) {
      if(card.quantity > 0){
        setCardsQuantity(card.id, card.quantity - 1);
      }
    } 
  }

  return (
    <form onSubmit={editCollectionForm.handleSubmit(onSubmit, onError)}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <TextInput type="text" label="Nome" name="name" form={editCollectionForm} />
        </Grid>
        <Grid item>
          <SearchInput label="Buscar" name="q" onChange={search} />
        </Grid>
        {watchShowCards.length > 0 && (
          <Grid item>
            <TableContainer>
              <Table>
                <TableBody>
                  {watchShowCards.map(value => (
                    <EditItemField
                      key={value.id}
                      {...value}
                      removeFn={() => remove(value.id)}
                      addFn={() => add(value.id)}
                    />
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        )}
        <Grid item>
          <Button variant="outlined" type="submit">
            Salvar
          </Button>
          <Button variant="contained" onClick={cleanSearchQuery}>
            Limpar
          </Button>
        </Grid>
        <Grid>{data && <CardsTable data={data.data} addFn={add} />}</Grid>
      </Grid>
    </form>
  );
}
