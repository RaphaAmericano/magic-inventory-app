import { Modal, Box, Backdrop, Fade } from "@mui/material";
import { useStores } from "@stores/index";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export function ModalContainer() {
  const { modalStore } = useStores();
  const { open, closeFn, children } = modalStore;
  return (
    <Modal
      open={open}
      onClose={closeFn}
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
}
