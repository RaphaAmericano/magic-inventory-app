import { useState, forwardRef, SelectHTMLAttributes, ForwardedRef, useEffect } from "react";
import { InputLabel, MenuItem, Select, SelectChangeEvent, Checkbox } from "@mui/material";
interface ISelectProp {
  value: any;
  label: string;
  checked: boolean;
}
interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  key: string;
  data: ISelectProp[];
  selectedValues: string[];
  onChangeFn: (event: SelectChangeEvent) => void;
}

function SelectInputCheckboxBoxComp(props: IProps, ref: ForwardedRef<HTMLSelectElement>) {
  const { children, className, label, key, data, selectedValues, onChangeFn } = props;
  const classNameList = [];

  const [value, setValue] = useState("")
  
  useEffect(() => {
    setValue(selectedValues.join(", "))
  },[selectedValues.length])

  console.log(data);
  return (
    <>
      {label && <InputLabel id={label && `id-select-${key}-label`}>{label}</InputLabel>}
      <Select
        labelId={key && `id-select-${key}-label`}
        label={label}
        value={value}
        renderValue={selected => selected}
        onChange={onChangeFn}
      >
        {data.map(({ value, label, checked }) => (
          <MenuItem key={value} value={value}>
            <Checkbox checked={checked} />
            {label}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}

export const SelectInputCheckboxBox = forwardRef<HTMLSelectElement, IProps>(SelectInputCheckboxBoxComp);
