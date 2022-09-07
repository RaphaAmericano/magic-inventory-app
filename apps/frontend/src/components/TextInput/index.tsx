import { Grid, TextField, Typography,  Button } from "@mui/material";

import css from "./style.module.scss";

export interface IProps {
  name: string;
  type: "email" | "text" | "password";
  label?: string;
  placeholder?: string;
  className?: string;
  form?: any;
}

export function TextInput(props: IProps) {
  const { label, type, name, form } = props;
  return (
    <div>
      {label && <Typography variant="body2">{label}</Typography>}
      <TextField type={type} {...(form  && form.register(name))} />
      {form.touchedFields[name] && form.errors[name] && <div>{form.errors[name].message}</div>}
    </div>
  );
}
