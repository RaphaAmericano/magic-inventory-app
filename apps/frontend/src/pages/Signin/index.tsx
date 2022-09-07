import { Container } from "@components/Container";
import { SigninForm } from "@components/SIgninForm";
import { useNavigate } from "react-router-dom";

function Signin(){
    const navigate = useNavigate();

    function goLogin(){
        navigate("/login");
    }

    return (<Container>
        <h2>Sigin</h2>
        <div>
            <SigninForm />
        </div>
        <div>
            <p>Já possui cadstro?</p>
            <button onClick={goLogin}>Entrar</button>
        </div>
    </Container>)
}

export default Signin;