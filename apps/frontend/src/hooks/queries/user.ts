import { useMutation, useQuery } from "react-query";
import { userSchema } from "../../api/schemas";
import { userRequests } from "../../api/requests";

export function useCreateUser() {
  const mutation = useMutation<unknown, unknown, userSchema.UserCreateParams>(
    userRequests.createUser
  );
  return mutation;
}

export function useGetUsers(){
  async function requestFn(){
    return userRequests.getUsers();
  }
  const query = useQuery<userSchema.User[]>(["get-users"], requestFn, {
    enabled: true,
    staleTime: 4000
  });

  return query
}

export function useDeleteUser(){
  const mutation = useMutation<unknown, unknown, userSchema.UserDeleteParams>(userRequests.deleteUser);

  return mutation;
}