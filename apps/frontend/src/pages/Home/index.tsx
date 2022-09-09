import { Container } from "@components/Container";
import { Drawer } from "@components/Drawer";
import { Button } from "@components/Button";

import css from "./style.module.scss";

function Home() {

  return (
    <Drawer>
      <Container className={css.container}>
        <h1 className={css.count} >
          Drawer teste 
        </h1>

        <div className={css.actions}>
          <Button theme="primary">
            Incrementar
          </Button>

          <Button theme="secondary">
            Resetar
          </Button>

          <Button theme="primary">
            Decrementar
          </Button>
        </div>
      </Container>
    </Drawer>
  );
}

export default Home;
