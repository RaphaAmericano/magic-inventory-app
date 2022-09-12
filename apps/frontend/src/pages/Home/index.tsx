import { Container } from "@components/Container";
import { Button } from "@components/Button";

import css from "./style.module.scss";
import { DrawerContainer } from "@components/DrawerContainer";

function Home() {
  return (
    <DrawerContainer>
        <h1 className={css.count}>DrawerContainer teste</h1>

        <div className={css.actions}>
          <Button theme="primary">Incrementar</Button>

          <Button theme="secondary">Resetar</Button>

          <Button theme="primary">Decrementar</Button>
        </div>
    </DrawerContainer>
  );
}

export default Home;
