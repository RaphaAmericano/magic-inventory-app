import { Grid, TextField, Typography,  Button } from "@mui/material";
import { TextInput } from "@components/TextInput";
import { userQueries } from "@hooks/queries";
import { useSiginForm } from "./signinFormHook";
import type { IFields } from "./signinFormHook";
import { useNavigate } from "react-router-dom";

export function SigninForm(){
    const navigate = useNavigate();
    const signinForm = useSiginForm();
    const useCreateUser = userQueries.useCreateUser();

    async function onSubmit(data:IFields){
        try {
            const { email, name, password } = data;
            const user = await useCreateUser.mutateAsync({ email, name, password });
            if(user){
                navigate('/login');
                signinForm.reset();
            }
        } catch (error) {
            const { status } = error as { message: string; status: number };
            console.log(status);
        }
    }

    function onError(error: any){
        console.log(error);
    }

    return (<form onSubmit={signinForm.handleSubmit(onSubmit, onError)}>
        <Grid container direction="column"  spacing={2}>
            <Grid item>
                <TextInput type="text" label="name" name="name" form={signinForm} />
            </Grid>
            <Grid item>
                <TextInput type="email" label="Email" name="email" form={signinForm} />
            </Grid>
            <Grid item>
                <TextInput type="password" label="Password" name="password" form={signinForm} />
            </Grid>
            <Grid item>
                <TextInput type="password" label="Repita o password" name="repeatPassword" form={signinForm}/>
            </Grid>
            <Grid item>
                <Button variant="contained" type="submit">Cadastrar</Button>
            </Grid>
        </Grid>
    </form>)
}