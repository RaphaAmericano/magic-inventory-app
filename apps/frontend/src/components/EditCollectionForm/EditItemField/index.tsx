import { cardQueries } from "@hooks/queries";
import { TableRow, TableCell, Button } from "@mui/material";
import { useStores } from "@stores/index";

interface IProps {
  id: string;
  quantity: number;
  addFn: () => void;
  removeFn: () => void;
}

export function EditItemField(props: IProps) {
  const { id, quantity, addFn, removeFn } = props;
  
  const { cardStore } = useStores();
  const { getCacheCard } = cardStore;

  const cacheCard = getCacheCard(id);
  console.log(cacheCard);

  if(cacheCard){
    const { name } = cacheCard;
    return (
      <TableRow>
        <TableCell>{name}</TableCell>
        <TableCell>{quantity}</TableCell>
        <TableCell>
          <Button onClick={addFn}>+</Button>
        </TableCell>
        <TableCell>
          <Button onClick={removeFn}>-</Button>
        </TableCell>
      </TableRow>
    );
  }

  const { data } = cardQueries.useGetCard({ id }); 
  if(!data) return null;
  const { name } = data;

  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{quantity}</TableCell>
      <TableCell>
        <Button onClick={addFn}>+</Button>
      </TableCell>
      <TableCell>
        <Button onClick={removeFn}>-</Button>
      </TableCell>
    </TableRow>
  );
}
