import { Container } from "@components/Container";
import { NewResumeForm } from "@components/NewResumeForm";
import css from "./style.module.scss";

function NewResumes(){
    
    return (<Container>
        <h1>Novo Resumo</h1>
        <div>
            <NewResumeForm />
        </div>
    </Container>)
}

export default NewResumes;