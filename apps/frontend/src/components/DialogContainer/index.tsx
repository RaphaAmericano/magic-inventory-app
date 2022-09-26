import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { useStores } from "@stores/index";

export function DialogContainer() {
  const { dialogStore } = useStores();
  const { children, open, scroll, title } = dialogStore;

  return <Dialog open={open} scroll={scroll}>
            {title && <DialogTitle>{title}</DialogTitle>}
            <DialogContent dividers={scroll === 'paper'}>
                {children}
            </DialogContent>
        </Dialog>;
}
