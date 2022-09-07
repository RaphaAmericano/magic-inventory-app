import { User, UserCreateParams } from "./user";

export interface AuthUserRequestParams {
  email: string;
  password: string;
}
export interface UserAuth extends UserCreateParams {
  token: string;
}
export interface AuthRequestResponse extends UserAuth {
    user: User;
}
export interface AuthRequestError {
  status: number;
  message: string;
}
  