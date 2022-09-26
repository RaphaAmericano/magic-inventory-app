import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Card } from "entities";
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
    image_uris: { small, normal, large, png, art_crop, border_crop },
  } = card;

  function renderLegalities() {
    return Object.keys(legalities).map(key => (
      <Grid item xs={6} key={key}>
        {key.toUpperCase()}: {legalities[key]}
      </Grid>
    ));
  }

  return (
    <Grid container rowSpacing={2} columnSpacing={2}>
      <Grid item>
        <Typography variant="h4">{name}</Typography>
      </Grid>
      <Grid container>
        <Grid item xs={6} md={6}>
          <img src={normal} />
        </Grid>
        <Grid item xs={6} md={6}>
          <Typography variant="body2">CMC: {cmc}</Typography>
          <Typography variant="body2">Artista: {artist}</Typography>
          <Typography variant="body2">Artista: {artist}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Formatos</Typography>
          <Grid container spacing={2}>
            {renderLegalities()}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
