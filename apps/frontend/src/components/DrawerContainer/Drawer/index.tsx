import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import { closedMixin, openedMixin } from "./../mixins";

interface MainDrawerProps extends DrawerProps {
  open?: boolean;
  drawerwidth: number;
}

export const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== "open" })<MainDrawerProps>(
  ({ theme, open, drawerwidth }) => ({
    width: drawerwidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme, drawerwidth),
      "& .MuiDrawer-paper": openedMixin(theme, drawerwidth),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }),
);
