import { useState } from "react";
import { User } from "entities";

interface AuthUser {
  token: string;
  _doc: UserDoc
}

interface UserDoc extends Omit<User, "password" | "id" >{
  _id: string;
  __v: number;
}


export function useAuth() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);

  function configAuth(user: AuthUser) {
    localStorage.setItem("token", user.token);
    setUser(user);
    setAuth(true);
  }

  function login(user: any) {
    localStorage.clear();
    configAuth(user);
  }

  function logout() {
    localStorage.clear();
    setAuth(false);
    setUser(null);
  }

  return { user, auth, login, logout };
}
