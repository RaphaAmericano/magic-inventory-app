import { useCallback, useState } from "react";
import { DialogProps } from "@mui/material";

export function useDialog() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');
  const [title, setTitle] = useState('');

  const [children, setChildren] = useState<null | JSX.Element>(null);

  const openFn = useCallback(() => {
    setOpen(true);
  }, []);

  const closeFn = useCallback(() => {
    setOpen(false);
  }, []);

  return { open, setOpen, openFn, closeFn, scroll, setScroll, title, setTitle, children, setChildren };
}
