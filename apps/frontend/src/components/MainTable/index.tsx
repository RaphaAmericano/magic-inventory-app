import { Button, Table, TableBody, TableCell, TableRow, TableContainer, TableHead } from "@mui/material";

interface IHeadingsProps {
  key: string;
  label: string;
  isAction: boolean;
  isImage?: boolean;
}

interface IProps {
  data: any[];
  headings: IHeadingsProps[];
}

export function MainTable(props: IProps) {
  const { data, headings } = props;

  function renderHead(headings: IHeadingsProps[]) {
    const dataLabels = headings.map(heading => heading.label);
    return (
      <TableHead>
        <TableRow>
          {dataLabels.map(label => (
            <TableCell key={label.toLowerCase()}>{label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

  function renderBodyRows(data: any[]) {
    return data.map(item => (
      <TableRow key={JSON.stringify(item)}>
        {headings.map(({ key, label, isAction, isImage }) =>
          isAction ? (
            <TableCell key={key} >
              <Button onClick={item[key]}>{isImage ? <img src={label} /> : label}</Button>
            </TableCell>
          ) : (
            <TableCell key={item[key]}>{isImage ? <img src={item[key]} /> : item[key]}</TableCell>
          ),
        )}
      </TableRow>
    ));
  }

  return (
    <TableContainer>
      <Table>
        {renderHead(headings)}
        <TableBody>{renderBodyRows(data)}</TableBody>
      </Table>
    </TableContainer>
  );
}
