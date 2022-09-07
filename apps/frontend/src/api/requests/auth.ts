import { authSchema } from "../schemas";
import service from "../service";

export async function authUser(params: authSchema.AuthUserRequestParams){
    return service.post<never, authSchema.AuthRequestResponse>("/users/auth", {
        ...params
    })
}