import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IFields {
    name: string;
}

const defaultValues: IFields = {
    name: ""
}

const schema = yup.object({
    name: yup.string().required("Informe o nome da coleção")
})

export function useNewCollectionForm(){
    const { formState, ...rest } = useForm<IFields>({
        defaultValues,
        resolver: yupResolver(schema)
    });
    return { errors: formState.errors, touchedFields: formState.touchedFields, ...rest }
}