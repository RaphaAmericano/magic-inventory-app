import { Card } from "entities";
import { MainTable } from "@components/MainTable";
import { setQueries } from "@hooks/queries";

interface IProps {
    data:Card[];
    addFn:(value:string) => void;
}
export function CardsTable(props:IProps){
    const { data, addFn } = props;
    const { data:sets } = setQueries.useGetSets();

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
        },
        {
            key: "add",
            label: "Adicionar",
            isAction: true,
        }
    ];
    
    function getSetName(value: string){
        return sets?.find((set) => set.code === value)?.name
    }

    function formatData(data:Card[]){
        return data.map(({ name, set, colors, cmc, image_uris: { small }, id }) => ({ name, set:getSetName(set), colors:colors.join(" "), cmc, image: small, add: () => addFn(id) }));
    }

    const formatedData = formatData(data);

    return <MainTable headings={headings} data={formatedData}/>
}