import { useMutation, useQueries, useQuery } from "react-query";
import { cardSchema } from "../../api/schemas";
import { cardRequests } from "../../api/requests";

export function useGetCard(params?: cardSchema.CardGetParams) {
  async function requestFn() {
    return cardRequests.getCard(params!);
  }
  const query = useQuery<cardSchema.CardGetResponse>(["get-card", params], requestFn, {
    enabled: Boolean(params),
    staleTime: 4000,
  });

  return query;
}

export function useGetCardSearch(params?: cardSchema.CardGetSearchParams) {
  async function requestFn() {
    return cardRequests.getCardSearch(params!);
  }
  const query = useQuery<cardSchema.CardGetSearchResponse>(["get-card-search", params], requestFn, {
    enabled: Boolean(params),
    staleTime: 4000,
    onSuccess: data => {
      console.log(data);
    },
  });

  return query;
}

// export function useGetCardBatch(params?: cardSchema.CardGetParams[]) {
//   async function requestFn(param: cardSchema.CardGetParams) {
//     return cardRequests.getCard(param);
//   }
//   if (!params) return null;

//   const requestArray = params.map( param => ({ queryKey: ["card", param], queryFn: requestFn }) );

//   const queries = useQueries(requestArray);
//   return queries;
// }
