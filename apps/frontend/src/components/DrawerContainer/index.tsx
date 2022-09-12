import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { DrawerHeader } from "./DrawerHeader";
import { closedMixin, openedMixin } from "./mixins";
import { DrawerListItem } from "./DrawerListItem";
import { DrawerBar } from "./DrawerBar";
import { Drawer } from "./Drawer";

// const mockArr = ["Inbox", "Starred", "Send email", "Drafts"];
const mockArr = [
  { text: "Inbox", icon: <MailIcon /> },
  { text: "Starred", icon: <MailIcon /> },
  { text: "Send email", icon: <InboxIcon /> },
  { text: "Drafts", icon: <MailIcon /> }
];

const drawerWidth = 240;

interface IProps {
  children: React.ReactNode;
}

export function DrawerContainer(props: IProps) {
  const { children } = props;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DrawerBar position="fixed" open={open} drawerWidth={drawerWidth}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Magic Inventory
          </Typography>
        </Toolbar>
      </DrawerBar>
      <Drawer variant="permanent" open={open} drawerWidth={drawerWidth}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {mockArr.map(({ text, icon }, index) => (
            <DrawerListItem key={text} text={text} icon={icon} open={open} />
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
