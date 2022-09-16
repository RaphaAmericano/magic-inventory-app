import { setSchema } from "../schemas";
import { scryfallService } from "../service";

export async function getSets(){
    return scryfallService.get<never, setSchema.SetGetResponse>(`/sets`);
}

export async function getSet(params: setSchema.SetGetParams){
    const { id } = params;
    return scryfallService.get<never, setSchema.SetGetResponse>(`/sets/${id}`)
}

export async function getSetByCode(params: setSchema.SetGetByCodeParams){
    const { code } = params;
    return scryfallService.get<never, setSchema.SetGetResponse>(`/sets/${code}`)
}
