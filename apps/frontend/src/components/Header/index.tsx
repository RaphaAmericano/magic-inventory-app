import { Link } from "react-router-dom";
import { Container } from "@components/Container";
import BrandIcon from "@assets/icons/brand.svg";
import { useStores } from "@stores/index";
import css from "./style.module.scss";

interface MenuItemProps {
  to: string; 
  text: string; 
  private: boolean,
}
interface MenuItem extends MenuItemProps { 
  submenu?:MenuItemProps[]
};
export interface IProps {
  menu: MenuItem[] 
}

export function Header(props:IProps) {
  const { menu } = props;
  
  return (
    <header className={css.header}>
      <Container className={css.wrapper}>
        <div className={css.overlayBlur}></div>

        <div className={css.brand}>
          <BrandIcon className={css.brandIcon} />
          <h3>Resumos</h3>
        </div>

        <nav className={css.menu}>
          <ul className={css.first_level_menu}>
            {menu.map((item) => item.submenu === undefined ? (<li key={item.to} >
              <Link key={item.to} to={item.to} >{item.text}</Link></li>) : <li key={item.to}>
              <Link to={item.to} >{item.text}</Link>
              {item.submenu && <ul className={css.second_level_menu}>
                {item.submenu.map((sub) => <li key={sub.to}><Link to={sub.to}>{sub.text}</Link></li>)}
              </ul> }
            </li>)}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
