import { Snackbar, Alert } from "@mui/material";
// import { SnackBar } from "@components/SnackBar"
import { useStores } from "@stores/index";

export function SnackBarContainer() {
  const { snackBarStore } = useStores();
  const { open, text, duration, severity } = snackBarStore;

  return (
    <Snackbar open={open} autoHideDuration={duration}>
      <Alert severity={severity}>{text}</Alert>
    </Snackbar>
  );
}
