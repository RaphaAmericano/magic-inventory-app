import { userSchema } from ".";

export interface Resume {
    id: number;
    text: string;
    createdAt: string;
    owner: userSchema.User,
    ownerId: number;
}
export interface PostResumeParams {
    ownerId: number;
    text: string;
}

export interface PostResumeResponse {
    
}

export interface GetResumesResponse {

}

export interface GetResumeResponse {
    
}

export interface GetResumeParams {
    id: number;
}

export interface DeleteResumeParams {
    id: number;
}

export interface DeleteResumeResponse {
    
}

export interface PatchResumeParams {
    id: number;
    text: string;
}

export interface PatchResumeResponse {
    
}