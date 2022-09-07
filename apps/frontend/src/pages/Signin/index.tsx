
import { Container, Typography, Button } from "@mui/material";
import { SigninForm } from "@components/SIgninForm";
import { useNavigate } from "react-router-dom";

function Signin(){
    const navigate = useNavigate();

    function goLogin(){
        navigate("/login");
    }

    return (<Container>
        <Typography>Sigin</Typography>
        <div>
            <SigninForm />
        </div>
        <div>
            <p>Já possui cadstro?</p>
            <Button variant="contained" onClick={goLogin}>Entrar</Button>
        </div>
    </Container>)
}

export default Signin;