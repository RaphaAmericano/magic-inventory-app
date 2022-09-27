import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useStores } from "@stores/index";

export function DialogContainer() {
  const { dialogStore } = useStores();
  const { children, open, closeFn, scroll, title } = dialogStore;

  return <Dialog open={open} scroll={scroll}>
            {title && <DialogTitle>{title}</DialogTitle>}
            <DialogContent dividers={scroll === 'paper'}>
                {children}
            </DialogContent>
            <DialogActions>
                <Button onClick={closeFn}>Fechar</Button>
            </DialogActions>
        </Dialog>;
}
