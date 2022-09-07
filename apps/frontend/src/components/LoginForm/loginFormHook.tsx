import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IFields {
    email: string;
    password: string;
}

const defaultValues: IFields = {
    email: "",
    password: ""
}

const schema = yup.object({
    email: yup.string().email().required("Informe seu email"),
    password: yup.string().required("Informe sua senha")
});

export function useLoginForm(){
    const { formState, ...rest } = useForm<IFields>({
        defaultValues,
        resolver: yupResolver(schema)
    });
    return { errors: formState.errors, touchedFields: formState.touchedFields, ...rest }
}