import { Container } from "@components/Container";
import css from "./style.module.scss";

export function Footer() {
    return (<footer className={css.footer}>
        <Container className={css.wrapper}>
            Footer
        </Container>
        </footer>);
}