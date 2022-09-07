import { Container, Box, Grid, Typography, Button } from "@mui/material";
import { LoginForm } from "@components/LoginForm";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    function goSignin(){
        navigate("/signin");
    }

    function passwordRecover(){
        console.log("recover");
    }

    return (<Container maxWidth="sm">
        <Grid container>
            <Grid item>
                <Typography variant="h3">Login</Typography>
            </Grid>
            
            <Grid item>
                <LoginForm />
                <Button variant="outlined" onClick={passwordRecover}>Esqueci a senha</Button>
            </Grid>
            <Grid item>
                <Typography variant="subtitle1">Não possui cadastro?</Typography>
                <Button variant="outlined" onClick={goSignin}>Cadastre-se!</Button>
            </Grid>

        </Grid>
    </Container>)
}

export default Login;