import { Card } from "entities";
import { MainTable } from "@components/MainTable";
import { colors } from "@mui/material";

interface IProps {
    data:Card[];
}
export function CardsTable(props:IProps){
    const { data } = props;
    console.log(data);

    const headings = [
        {
            key: "name",
            label: "Nome",
            isAction: false,
        },
        {
            key: "set",
            label: "Set",
            isAction: false,
        },
        {
            key: "colors",
            label: "Cores",
            isAction: false,
        },
        {
            key: "cmc",
            label: "CMC",
            isAction: false,
        },
        {
            key: "image",
            label: "Image",
            isAction: false,
            isImage: true
        }
    ];
    

    function formatData(data:Card[]){
        return data.map(({ name, set, colors, cmc, image_uris: { small } }) => ({ name, set, colors:colors.join(" "), cmc, image: small }));
    }

    const formatedData = formatData(data);

    return <MainTable headings={headings} data={formatedData}/>
}