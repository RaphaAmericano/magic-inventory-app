import { forwardRef, InputHTMLAttributes, ForwardedRef } from "react";
import { Typography,TextField,  Button } from "@mui/material";

import cln from "classnames";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: "q";
  label?: string;
  form?: any;
}

function SearchInputComp(props: IProps, ref: ForwardedRef<HTMLInputElement>) {
  const { children, name, className, label, onChange, form, ...restProps } = props;
  const classNameList = [];
  return (
    <div>
      {label && <Typography variant="body2">{label}</Typography>}
      <TextField type="search" onChange={onChange} {...restProps} {...(form && form.register(name))} />
      {/* {form.touchedFields[name] && form.errors[name] && <div>{form.errors[name].message}</div>} */}
    </div>
  );
}

export const SearchInput = forwardRef<HTMLInputElement, IProps>(SearchInputComp);
