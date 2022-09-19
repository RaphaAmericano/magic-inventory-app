import { TableRow, TableCell, Button } from "@mui/material";

interface IProps {
  id: string;
  quantity: number;
  addFn: () => void;
  removeFn: () => void;
}
export function EditItemField(props: IProps) {
  const { id, quantity, addFn, removeFn } = props;
  return (
    <TableRow>
      <TableCell>{id}</TableCell>
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
