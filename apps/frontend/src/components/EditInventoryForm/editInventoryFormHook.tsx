import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Inventory } from "entities";


export interface IFields extends Inventory {
    
}
type IProps = Inventory;

const defaultValues: IFields = {
    _id: "",
    ownerId: "",
    name: ""
}

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