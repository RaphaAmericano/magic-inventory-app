import { useStores } from "@stores/index";
import { Container } from "@components/Container";
import { Button } from "@components/Button";

import css from "./style.module.scss";

function Home() {
  const { counterStore } = useStores();

  return (
    <Container className={css.container}>
      <h1 className={css.count} data-testid="count">
        {counterStore.count}
      </h1>

      <div className={css.actions}>
        <Button theme="primary" onClick={counterStore.increment}>
          Incrementar
        </Button>

        <Button theme="secondary" onClick={counterStore.reset}>
          Resetar
        </Button>

        <Button theme="primary" onClick={counterStore.decrement}>
          Decrementar
        </Button>
      </div>
    </Container>
  );
}

export default Home;
