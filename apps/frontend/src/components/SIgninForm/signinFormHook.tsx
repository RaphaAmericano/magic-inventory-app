import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

export interface IFields {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
} 

const defaultValues: IFields = {
    name: "",
    email: "",
    password: "",
    repeatPassword: ""
}
const schema = yup.object({
    name: yup.string().required("Informe seu nome"),
    email: yup.string().email().required("Informe seu email"),
    password: yup.string().required("Informe sua senha"),
    repeatPassword: yup.string().oneOf([yup.ref("password"), null], "Senha não confere")
});

export function useSiginForm(){
    const { formState, ...rest } = useForm<IFields>({ defaultValues, resolver: yupResolver(schema)});

    return { errors: formState.errors, touchedFields: formState.touchedFields, ...rest };
}