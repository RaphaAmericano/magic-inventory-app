import { Typography, Button } from "@mui/material";

import css from "./style.module.scss";
import { DrawerContainer } from "@components/DrawerContainer";

function Home() {
  return (
    <>
        <Typography variant="h1">Bem vindo</Typography>

        <div className={css.actions}>
          <Button>Incrementar</Button>

          <Button>Resetar</Button>

          <Button>Decrementar</Button>
        </div>
    </>
  );
}

export default Home;
