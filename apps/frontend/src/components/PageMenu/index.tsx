import { Button } from "@mui/material";
import { Link } from "react-router-dom";
interface IMenuProps {
    text: string;
    to: string;
}
interface IProps {
    menu: IMenuProps[]
}
export function PageMenu(props: IProps){
    const { menu } = props;
    return <nav>{menu.map(({ text, to }) => <Link to={to}>{text}</Link>)}</nav>
}