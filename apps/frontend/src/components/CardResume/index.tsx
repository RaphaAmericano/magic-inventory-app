import { upperCaseFirstLetter } from "@hooks/helpers/string";
import { Alert, AlertColor, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Card, Legalities, Legality } from "entities";
interface IProps {
  card: Card;
}
export function CardResume(props: IProps) {
  const { card } = props;
  const {
    name,
    artist,
    cmc,
    legalities,
    prices: { usd },
    image_uris: { small, normal, large, png, art_crop, border_crop },
  } = card;

  function renderLegalities() {
    function setFormatLegality(legality: Legality): AlertColor {
      switch (legality) {
        case "banned":
          return "error" ;
        case "restricted":
          return "info";
        case "not_legal":
          return "warning";
        case "legal":
        default:
          return "success";
      }
    }

    return Object.keys(legalities).map(key => {
      const legality = key as keyof Legalities;
      const severity = setFormatLegality(legalities[legality]);

      return (
        <Grid item key={key}>
          <Alert severity={severity}>{upperCaseFirstLetter(key)}</Alert>
        </Grid>
      );
    });
  }

  return (
    <Grid container rowSpacing={1} columnSpacing={1}>
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item xs={6} md={3}>
          <img src={normal} />
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography variant="body2">Nome: {name}</Typography>
          <Typography variant="body2">CMC: {cmc}</Typography>
          <Typography variant="body2">Preço: ${usd}</Typography>
          <Typography variant="body2">Artista: {artist}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h6">Formatos</Typography>
            </Grid>
            <Grid item>
              <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item>
                  <Alert severity="success">Legal</Alert>
                </Grid>
                <Grid item>
                  <Alert severity="warning">Ilegal</Alert>
                </Grid>
                <Grid item>
                  <Alert severity="info">Restrito</Alert>
                </Grid>
                <Grid item>
                  <Alert severity="error">Banido</Alert>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container rowSpacing={1} columnSpacing={1}>
            {renderLegalities()}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
