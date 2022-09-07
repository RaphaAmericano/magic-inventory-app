import { useMutation, useQuery } from "react-query";
import { resumeSchema } from "../../api/schemas";
import { resumeRequests } from "../../api/requests";

function formatCreatedAt(resumes: resumeSchema.Resume[]){
    return resumes.map((resume) => ({...resume, createdAt: new Date(resume.createdAt)}));
}

export function useGetResumes(){
    async function requestFn(){
        return resumeRequests.getResumes();
    }

    const query = useQuery<resumeSchema.Resume[]>(["get-resumes"], requestFn, {
        enabled: true,
        staleTime: 4000
    });
    if(query.data){
        return {...query, data: formatCreatedAt(query.data)};
    }
    return query;
}

export function useGetResume(params?: resumeSchema.GetResumeParams){
    async function requestFn(){
        return resumeRequests.getResume(params!)
    }

    const query = useQuery<resumeSchema.Resume>(["get-resume"], requestFn, {
        enabled: true,
        staleTime: 4000
     });
     return query;
}

export function usePostResume(){
    const mutation = useMutation<unknown, unknown, resumeSchema.PostResumeParams>(resumeRequests.postResume);

    return mutation;
}

export function useDeleteResume(){
    const mutation = useMutation<unknown, unknown, resumeSchema.DeleteResumeParams>(resumeRequests.deleteResume);

    return mutation;
}

export function usePatchResume(){
    const mutation = useMutation<unknown, unknown, resumeSchema.PatchResumeParams>(resumeRequests.patchResume);

    return mutation;
}

