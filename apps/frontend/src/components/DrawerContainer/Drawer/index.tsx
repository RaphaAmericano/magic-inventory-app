import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import { closedMixin, openedMixin } from "./../mixins";

interface MainDrawerProps extends DrawerProps {
  open?: boolean;
  drawerWidth: number;
}

export const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== "open" })<MainDrawerProps>(
  ({ theme, open, drawerWidth }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme, drawerWidth),
      "& .MuiDrawer-paper": openedMixin(theme, drawerWidth),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }),
);
