import { useState, useCallback } from "react";

export function useModal() {
  const [open, setOpen] = useState(false);

  const openFn = useCallback(() => {
    setOpen(true);
  },[]);

  const closeFn = useCallback(() => {
    setOpen(false);
  },[]);

  return { open, openFn, closeFn };
}
