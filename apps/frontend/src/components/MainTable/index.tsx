import { Button, Table, TableBody, TableCell, TableRow, TableContainer, TableHead } from "@mui/material";

interface IHeadingsProps {
  key: string;
  label: string;
  isAction: boolean;
}

interface IProps {
  data: any[];
  headings: IHeadingsProps[];
}

export function MainTable(props: IProps) {
  const { data, headings } = props;

  const dataLabels: string[] = headings.map(heading => heading.label);

  function renderHead() {
    return (
      <TableHead>
        <TableRow>
          {dataLabels.map(label => (
            <TableCell key={label}>{label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  function renderBodyRows(data: any[]) {
    return data.map(item => (
      <TableRow key={JSON.stringify(item)}>
        {headings.map(({ key, label, isAction}) =>
          isAction ? (
            <TableCell key={key}>
              <Button onClick={item[key]}>{label}</Button>
            </TableCell>
            ) : (
            <TableCell key={item[key]}>{item[key]}</TableCell>
          ),
        )}
      </TableRow>
    ));
  }

  return (
    <TableContainer>
      <Table>
        {renderHead()}
        <TableBody>{renderBodyRows(data)}</TableBody>
      </Table>
    </TableContainer>
  );
}
