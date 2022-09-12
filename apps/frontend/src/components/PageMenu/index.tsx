import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { PageMenuItem } from "./PageMenuItem";
import type { IProps as IMenuProps } from "./PageMenuItem";
import css from "./style.module.scss";

interface IProps {
  menu: IMenuProps[];
}

export function PageMenu(props: IProps) {
  const { menu } = props;
  return (
    <nav className={css.page_menu_nav}>
      {menu.map((item) => <PageMenuItem key={item.text} {...item} />)}
    </nav>
  );
}
