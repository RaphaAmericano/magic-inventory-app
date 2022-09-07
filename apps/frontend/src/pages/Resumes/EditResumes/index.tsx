import { Container } from "@components/Container";
import { EditResumeForm } from "@components/EditResumeForm";
import { useParams } from "react-router-dom";
import { resumeQueries } from "@hooks/queries";

import css from "./style.module.scss";

function EditResumes(){
    const { id } = useParams();
    const { data, isLoading } = resumeQueries.useGetResume({ id: id ? +id : 0 });

    return (<Container>
        <h1>Editar Resumo</h1>
        <div>
            {data && !isLoading && <EditResumeForm resume={data}/>}
        </div>
    </Container>)
}

export default EditResumes;