import { ImageList } from "@mui/material";
import { Collection } from "entities";
import { CardGridItem } from "./CardGridItem";

interface IProps {
  data: Collection;
}
export function CardGrid(props: IProps) {
  const { data: { cards } } = props;

  return (
    <ImageList>
      {cards.map(card => <CardGridItem key={card.id} {...card} />) }
    </ImageList>
  );
}
