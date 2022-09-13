import { Container, Grid, Typography, Button } from "@mui/material";
import { SigninForm } from "@components/SigninForm";
import { useNavigate } from "react-router-dom";

function Signin(){
    const navigate = useNavigate();

    function goLogin(){
        navigate("/login");
    }

    return (<Container maxWidth="sm">
        <Grid container spacing={2} direction="column">
            <Grid item>
                <Typography variant="h3">Sigin</Typography>
            </Grid>
            <Grid item>
                <SigninForm />
            </Grid>
            <Grid item>
                <Typography variant="subtitle1">Já possui cadastro?</Typography>
                <Button variant="contained" onClick={goLogin}>Entrar</Button>
            </Grid>
        </Grid>
    </Container>)
}

export default Signin;