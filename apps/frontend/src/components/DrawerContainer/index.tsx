import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ViewListIcon from '@mui/icons-material/ViewList';
import InventoryIcon from '@mui/icons-material/Inventory';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import BarChartIcon from '@mui/icons-material/BarChart';
import { DrawerHeader } from "./DrawerHeader";
import { DrawerListItem } from "./DrawerListItem";
import { DrawerBar } from "./DrawerBar";
import { Drawer } from "./Drawer";
import { DrawerUserContent } from "./DrawerUserContent";
import { useStores } from "@stores/index";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

interface IProps {
  children: React.ReactNode;
}

export function DrawerContainer(props: IProps) {
  const { children } = props;
  const [open, setOpen] = React.useState(false);

  const navigate = useNavigate();
  const { authStore } = useStores();
  const { logout } = authStore;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItems = [
    { text: "Inventário", icon: <InventoryIcon /> , to: "inventory" },
    { text: "Coleções", icon: <ViewListIcon /> , to: "collections"},
    { text: "Wishlists", icon: <StarBorderIcon />, to: "wishlists" },
    { text: "Gráficos", icon: <BarChartIcon />, to: "charts" }
  ];

  return (
    <Box sx={{ display: "flex" }}>
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
          {open && <DrawerUserContent />}
          <IconButton onClick={handleDrawerClose}>
            {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map(({ text, icon, to }, index) => (
            <DrawerListItem key={text} text={text} icon={icon} open={open} onClick={() => navigate(`/${to}`)} />
          ))}
        </List>
        <Divider />
        <DrawerListItem text={'Sair'} icon={<ExitToAppIcon />} open={open} onClick={logout}/>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
