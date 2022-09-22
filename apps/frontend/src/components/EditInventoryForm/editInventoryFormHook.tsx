import { useForm, useFieldArray } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Inventory } from "entities";

export interface IFields {
  name: string;
  collections: { id: string }[];
}

type IProps = IFields;

const schema = yup.object({
  name: yup.string().required("Informe o nome"),
  collections: yup.array().of(
    yup.object().shape({
      id: yup.string(),
    }),
  ),
});

export function useEditInventoryForm(props: IProps) {
  const { control, formState, ...rest } = useForm<IFields>({
    defaultValues: { ...props },
    resolver: yupResolver(schema),
  });

  const { fields, append, remove, replace, update } = useFieldArray({ name: "collections", control });

  return {
    errors: formState.errors,
    touchedFields: formState.touchedFields,
    fields,
    append,
    remove,
    replace,
    update,
    ...rest,
  };
}
