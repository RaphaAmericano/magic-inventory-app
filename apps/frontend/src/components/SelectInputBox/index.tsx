import { InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ChangeEvent } from "react";
interface ISelectProp {
  value: any;
  label: string;
}
interface IProps {
  label?: string;
  key: string;
  data: ISelectProp[];
  onChangeFn: (event: SelectChangeEvent) => void;
}

export function SelectInputBox(props: IProps) {
  const { label, key, data, onChangeFn } = props;
  return (
    <>
      {label && <InputLabel id={label && `id-select-${key}-label`}>{label}</InputLabel>}
      <Select labelId={key && `id-select-${key}-label`} label={label} onChange={onChangeFn}>
        {data.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}
