import { useMutation, useQuery } from "react-query";
import { collectionSchema } from "../../api/schemas";
import { collectionRequests } from "../../api/requests";


export function usePostCollection(){
    const mutation = useMutation<unknown, unknown, collectionSchema.CollectionPostParams>(
        collectionRequests.postCollection
    );
    return mutation;
}

export function useGetCollection(params?: collectionSchema.CollectionGetParams){
    async function requestFn(){
        return collectionRequests.getCollection(params!)
    }
    const query = useQuery<collectionSchema.CollectionGetResponse>(["get-collection", params], requestFn, {
        enabled: Boolean(params),
        staleTime: 4000
    });

    return query;
}

export function useGetCollectionByUserId(params?: collectionSchema.CollectionGetByUserIdParams){
    async function requestFn(){
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return collectionRequests.getCollectionByUserId(params!);
    }

    const query = useQuery<collectionSchema.CollectionGetByUserIdResponse>(["get-user-collections", params], requestFn, {
        enabled: Boolean(params),
        staleTime: 4000,
    });

    return query;
}

export function usePatchCollection(){
    const mutation = useMutation<unknown, unknown, collectionSchema.CollectionPatchParams>(collectionRequests.patchCollection );

    return mutation;
}

export function useDeleteCollection(){
    const mutation = useMutation<unknown, unknown, collectionSchema.CollectionDeleteParams>(collectionRequests.deleteCollection)
    
    return mutation;
}