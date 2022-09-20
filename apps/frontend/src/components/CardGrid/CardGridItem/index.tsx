import { ImageListItem, ImageListItemBar } from "@mui/material";
import { cardQueries } from "@hooks/queries";
import { CardResume } from "entities";

type IProps = CardResume;
export function CardGridItem(props:IProps){
    const { id, quantity } = props;
    const { data } = cardQueries.useGetCard({ id });

    if(!data) return null;

    return  <ImageListItem>
                <img src={data.image_uris.normal} loading="lazy" />
                <ImageListItemBar title={data.name} subtitle={<span>{quantity}</span>} position="below"/>
            </ImageListItem>
}