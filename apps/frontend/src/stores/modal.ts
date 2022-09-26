import { DialogProps } from "@mui/material";
import { useState, useCallback } from "react";

export function useModal() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');
  const [title, setTitle] = useState('');
  
  const [children, setChildren] = useState<null | JSX.Element>(null);

  const openFn = useCallback(() => {
    setOpen(true);
  },[]);

  const closeFn = useCallback(() => {
    setOpen(false);
  },[]);

  return { open, openFn, closeFn, scroll, setScroll, title, setTitle,  children, setChildren };
}
