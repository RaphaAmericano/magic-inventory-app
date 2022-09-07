import { Grid, TextField, Typography,  Button } from "@mui/material";
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
                <Grid container spacing={2}>
                    <Grid direction="column" container item xs={12}>
                        <Typography variant="body2">Email</Typography>
                        <TextField type="email" {...loginForm.register('email')}/>
                    </Grid>
                    <Grid direction="column" container item xs={12}>
                        <Typography variant="body2">Password</Typography>
                        <TextField type="password" {...loginForm.register('password')}/>
                    </Grid>
                    <Grid direction="column" container item xs={12}>
                        <Button variant="contained" type="submit">Entrar</Button>
                    </Grid>
                </Grid>
            </form>
}