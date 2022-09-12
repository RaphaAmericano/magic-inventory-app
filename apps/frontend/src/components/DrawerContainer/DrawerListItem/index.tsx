import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

interface IProps {
  text: string;
  icon?: any | null;
  open?: boolean;
  onClick?: () => void;
}
export function DrawerListItem(props: IProps) {
  const { text, icon, open, onClick } = props;

  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        onClick={onClick && onClick}
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        >
          {icon && icon}
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
}
