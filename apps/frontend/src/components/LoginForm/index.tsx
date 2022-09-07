import { Grid, TextField, Typography,  Button } from "@mui/material";
import { TextInput } from "@components/TextInput";
import { useLoginForm } from "./loginFormHook";
import type { IFields } from "./loginFormHook";
import { authQueries } from "@hooks/queries";
import { useStores } from "@stores/index";

export function LoginForm(){
    const loginForm = useLoginForm();
    const useAuthUser = authQueries.useAuthUser();

    async function onSubmit(data:IFields){
        console.log(data)
        try {
            const { email, password } = data;
            const user = await useAuthUser.mutateAsync({ email, password });
        } catch (error) {
            const { status } = error as { message: string; status: number };
        }
    }

    function onError(error:any){
        console.log(error);
    }

    return  <form onSubmit={loginForm.handleSubmit(onSubmit, onError)}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <TextInput type="email" label="Email" name="email" form={loginForm}/>
                    </Grid>
                    <Grid item>
                        <TextInput type="password" label="Password" name="password" form={loginForm}/>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" type="submit">Entrar</Button>
                    </Grid>
                </Grid>
            </form>
}