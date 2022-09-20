import type { PropsWithChildren, ReactNode } from "react";
import { createContext, useContext } from "react";

import { useCounter } from "./count";
import { useAuth } from "./auth";
import { useSnackBar } from "./snackbar";
import { useCard } from "./card";

interface Stores {
  counterStore: ReturnType<typeof useCounter>;
  authStore: ReturnType<typeof useAuth>;
  snackBarStore: ReturnType<typeof useSnackBar>;
  cardStore: ReturnType<typeof useCard>;
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const storesCtx = createContext<Stores>(null!);

export function useStores() {
  return useContext(storesCtx);
}

export function StoresProvider(props: PropsWithChildren<ReactNode>) {
  const counterStore = useCounter();
  const authStore = useAuth();
  const snackBarStore = useSnackBar();
  const cardStore = useCard();

  return <storesCtx.Provider value={{ counterStore, authStore, snackBarStore, cardStore }}>{props.children}</storesCtx.Provider>;
}
