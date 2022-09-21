import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IFields {
  name: string;
  collections: string[];
}

const defaultValues: IFields = {
  name: "",
  collections: [],
};

const schema = yup.object({
  name: yup.string().required("Informe o nome do inventário"),
  collections: yup.array().of(yup.string()),
});

export function useNewInventoryForm() {
  const { control, formState, ...rest } = useForm<IFields>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { fields, append, remove, replace, update } = useFieldArray<IFields, never, "collections">({
    name: "collections",
    control,
  });

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
