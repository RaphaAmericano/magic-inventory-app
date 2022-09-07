import { Container } from "@components/Container";
import { ResumesTable } from "@components/ResumesTable";
import { resumeQueries } from "@hooks/queries";
import { useNavigate } from "react-router-dom";

import css from "./style.module.scss";

function ListResumes(){
    const navigate = useNavigate();
    const useDeleteResume = resumeQueries.useDeleteResume();
    const { data, isLoading, status } = resumeQueries.useGetResumes();
    
    function editResume(id: number){
        navigate(`/resumes/${id}`)
    }

    async function deleteResume(id: number){
        try {
            const resume = await useDeleteResume.mutateAsync({ id });
            console.log(resume);
        } catch (error) {
            console.log(error);
        }
    }

    return (<Container>
        <h1>Listar Resumos</h1>
        {data && <ResumesTable data={data} editFn={editResume} deleteFn={deleteResume}/>}
    </Container>)
}

export default ListResumes;