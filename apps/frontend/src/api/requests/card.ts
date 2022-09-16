import { cardSchema } from "../schemas";
import { scryfallService } from "../service";

export async function getCard(params: cardSchema.CardGetParams){
    const { id } = params;
    return scryfallService.get<never, cardSchema.CardGetResponse>(`/cards/${id}`);
}

export async function getCardSearch(params: cardSchema.CardGetSearchParams){
    const { q } = params;
    return scryfallService.get<never, cardSchema.CardGetSearchResponse>(`/cards/search?q=${q}`);
}