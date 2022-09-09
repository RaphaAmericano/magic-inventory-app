import { useState, ReactNode } from "react";
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

interface IProps {
    children: ReactNode
};

export function Drawer(props: IProps ){
    const { children } = props; 
    const [open, setOpen] = useState(true);

    function handleOpen(){
        setOpen(true);
    }

    function handleClose(){
        setOpen(false);
    }

    return <>
        <div>{children}</div>
    </>
}