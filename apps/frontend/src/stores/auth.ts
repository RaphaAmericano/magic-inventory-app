import {  useState } from "react";

interface AuthUser {
  token: string;
  id: number;
  email: string;
  name: string;
  password: string;
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
