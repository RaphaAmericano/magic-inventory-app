import { cardQueries } from "@hooks/queries";
import { TableRow, TableCell, Button } from "@mui/material";

interface IProps {
  id: string;
  quantity: number;
  addFn: () => void;
  removeFn: () => void;
}
export function EditItemField(props: IProps) {
  const { id, quantity, addFn, removeFn } = props;
  // const { data:search } = cardQueries.useGetCardSearch();
  // console.log(search);
  
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
