import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import css from "../style.module.scss";

export interface IProps {
    text: string;
    to: string;
}

export function PageMenuItem(props: IProps){
    const { text, to } = props;
    return <NavLink to={to} className={css.page_menu_item}>
    <Button>{text}</Button>
  </NavLink>
}
