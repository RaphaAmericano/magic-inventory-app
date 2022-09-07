import { Container } from "@components/Container";
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

    return (<Container>
        <h2>Login</h2>
        <div>
            <LoginForm />
            <button type="button" onClick={passwordRecover}>Esqueci a senha</button>
        </div>
        <div>
            <p>Não possui cadastro?</p>
            <button onClick={goSignin}>Cadastre-se!</button>
        </div>
    </Container>)
}

export default Login;