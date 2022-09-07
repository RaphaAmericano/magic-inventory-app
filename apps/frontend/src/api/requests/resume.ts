import { resumeSchema } from "../schemas";
import service from "../service";

export async function postResume(params: resumeSchema.PostResumeParams) {
  return service.post<never, resumeSchema.PostResumeResponse>("/resumes", { ...params });
}

export async function getResumes(){
  return service.get<never, resumeSchema.Resume[]>("/resumes");
}

export async function getResume(params: resumeSchema.GetResumeParams){
  const { id } = params;
  return service.get<never, resumeSchema.Resume>(`/resumes/${id}`)
}

export async function deleteResume(params: resumeSchema.DeleteResumeParams){
  const { id } = params
  return service.delete<never>(`/resumes/${id}`);
}

export async function patchResume(params: resumeSchema.PatchResumeParams){
  const { id, ...restParams } = params;
  return service.patch<never, resumeSchema.PatchResumeResponse>(`/resumes/${id}`, { ...restParams })
}