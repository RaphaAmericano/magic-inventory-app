import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Inventory } from "entities";


export interface IFields  {
    name: string;
}

type IProps = IFields;

const schema = yup.object({
    name: yup.string().required("Informe o nome")
});

export function useEditInventoryForm(props:IProps){

    const { formState, ...rest } = useForm<IFields>({
        defaultValues: { ...props },
        resolver: yupResolver(schema)
    });
    return { errors: formState.errors, touchedFields: formState.touchedFields, ...rest }
}