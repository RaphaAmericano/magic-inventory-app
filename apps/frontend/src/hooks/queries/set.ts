import { useQuery } from "react-query";
import { setSchema } from "../../api/schemas";
import { setRequests } from "../../api/requests";

export function useGetSets() {
  async function requestFn() {
    return setRequests.getSets();
  }

  const query = useQuery<setSchema.SetGetResponse, unknown, setSchema.SetGetResponseFiltered>(["get-sets"], requestFn, {
    enabled: true,
    staleTime: 4000,
    select: (data) => {
        data.data
        console.log()
        return data.data;
    },
  });

  return query;
}

export function useGetSetByCode() {}
