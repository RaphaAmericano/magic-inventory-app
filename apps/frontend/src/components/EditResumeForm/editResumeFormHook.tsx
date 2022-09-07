import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export interface IFields {
    text: string;
}

const defaultValues: IFields = {
    text: ""
}

const schema = yup.object({
    text: yup.string().required("É necessário um texto"),
});

export function useEditResumeForm(){
    const  { formState, ...rest } = useForm<IFields>({ defaultValues, resolver: yupResolver(schema)});

    return { errors: formState.errors, touchedFields: formState.touchedFields, ...rest }
}