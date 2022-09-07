import { userSchema } from "../schemas";
import service from "../service";

export async function createUser(params: userSchema.UserCreateParams) {
  return service.post<never>("/users", {
    ...params,
  });
}

export async function getUsers() {
  return service.get<never, userSchema.User[]>("/users");
}

export async function deleteUser(params: userSchema.UserDeleteParams) {
    const { id } = params;
  return service.delete<never>(`/users/${id}`);
}
