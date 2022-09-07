import { useStores } from "@stores/index";
import { useMutation } from "react-query";
import { authRequests } from "../../api/requests";
import { authSchema } from "../../api/schemas";

export function useAuthUser() {
  const { authStore } = useStores();
  const { login } = authStore;
  // resposta, tipo erro, parametro

  const mutation = useMutation<authSchema.AuthRequestResponse, unknown, authSchema.AuthUserRequestParams>(
    authRequests.authUser,
    { onSuccess: login },
  );

  return mutation;
}
