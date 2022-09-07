import { useEditResumeForm } from "./editResumeFormHook";
import type { IFields } from "./editResumeFormHook";
import { resumeQueries } from "@hooks/queries";
import css from "./style.module.scss";
import { resumeSchema } from "src/api/schemas";
import { useEffect } from "react";

interface IProps {
    resume: resumeSchema.Resume;
}

export function EditResumeForm(props:IProps){
    const { resume: { id, text } } = props;
    
    const editResumeForm = useEditResumeForm();
    const usePatchResume = resumeQueries.usePatchResume();
    
    useEffect(() => {
        editResumeForm.setValue("text", text);
    },[text]);

    async function onSubmit(data:IFields){
        const { text } = data;
        try {
            const resume = await usePatchResume.mutateAsync({ id, text });
            console.log(resume);
        } catch (error) {
            const { status } = error as { message: string; status: number };
            console.log(status);
        }
    }

    function onError(error: any){
        console.log(error);
    }

    return (<form onSubmit={editResumeForm.handleSubmit(onSubmit, onError)} className={css.form}>
        <textarea rows={5} {...editResumeForm.register('text')} />
        <button type="submit">Salvar</button>
    </form>)
}