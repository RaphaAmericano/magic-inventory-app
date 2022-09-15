import { collectionSchema } from "../schemas";
import service from "../service";

export async function getCollection(params: collectionSchema.CollectionGetParams){
    const { _id } = params;
    return service.get<never, collectionSchema.CollectionGetResponse>(`/collections/${_id}`);
}

export async function getCollectionByUserId(params: collectionSchema.CollectionGetByUserIdParams) {
    const { ownerId } = params;
    return service.get<never, collectionSchema.CollectionGetByUserIdResponse>(`/collections/user/${ownerId}`);
}

export async function postCollection(params: collectionSchema.CollectionPostParams){
    return service.post<never, collectionSchema.CollectionPostResponse>(`/collections`, { ...params })
} 

export async function deleteCollection(params: collectionSchema.CollectionDeleteParams){
    const { _id } = params;
    return service.delete<never>(`/collections/${_id}`)
}

export async function patchCollection(params: collectionSchema.CollectionPatchParams){
    const { _id, ...restParams } = params;
    return service.patch<never, collectionSchema.CollectionPatchResponse>(`/collections/${_id}`, { ...restParams });
}