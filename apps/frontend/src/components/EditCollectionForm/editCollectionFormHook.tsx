import { useForm, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IFields {
  name: string;
  cards: { id: string, quantity: number}[]
}

type IProps = IFields;

const schema = yup.object({
  name: yup.string().required("Informe o nome"),
  cards: yup.array().of(
    yup.object().shape({
      id: yup.string(),
      quantity: yup.number().min(0),
    }),
  ),
});

export function useEditCollectionForm() {
  const { control, formState, ...rest } = useForm<IFields>({
    // defaultValues: { ...props },
    resolver: yupResolver(schema),
  });

  const { fields, append, remove, replace, update } = useFieldArray({ name:"cards", control });
  return { errors: formState.errors, touchedFields: formState.touchedFields, fields, append, remove, replace, update, ...rest };
}
