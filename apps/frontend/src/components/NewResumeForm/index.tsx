import { useNewResumeForm } from "./newResumeFormHook";
import type { IFields } from "./newResumeFormHook";
import { resumeQueries } from "@hooks/queries";
import { useStores } from "@stores/index";
import css from "./style.module.scss";

export function NewResumeForm(){
    const newResumeForm = useNewResumeForm();
    const usePostResume = resumeQueries.usePostResume();
    const { authStore } = useStores();
    const { user } = authStore;

    async function onSubmit(data:IFields){
        const { text } = data;
        if(user?.id){
            try {
                const resume = await usePostResume.mutateAsync({ text, ownerId: user.id });
                console.log(resume);
                newResumeForm.reset();
            } catch (error) {
                const { status } = error as { message: string; status: number };
                console.log(status);
            }
        }
    }

    function onError(error: any){
        console.log(error);
    }

    return (<form onSubmit={newResumeForm.handleSubmit(onSubmit, onError)} className={css.form}>
        <textarea rows={5} {...newResumeForm.register('text')} />
        <button type="submit">Salvar</button>
    </form>)
}