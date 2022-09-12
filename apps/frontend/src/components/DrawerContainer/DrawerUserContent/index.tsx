import { Box, Avatar } from "@mui/material";
import { useStores } from "@stores/index";

interface IProps {}
export function DrawerUserContent(props: IProps) {
  const { authStore } = useStores();
  const { user } = authStore;
  if (!user) return null;
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar sx={{ width: 32, height: 32 }}>{user?._doc.name[0].toUpperCase()}</Avatar>
      {user?._doc.name}
    </Box>
  );
}
