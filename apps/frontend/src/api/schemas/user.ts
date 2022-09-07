export interface User {
  name: string;
  email: string;
  id: number;
}

export interface UserCreateParams extends Omit<User, "id">{
  password: string;
}

export interface UserCreateResponse extends User {
  id: number;
}

export interface UserDeleteParams {
  id: number;
}