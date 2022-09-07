import { SnackBar } from "@components/SnackBar"
import { useStores } from "@stores/index";

export function SnackBarContainer(){
    const { snackBarStore } = useStores();
    const { open, text } = snackBarStore;

    return <>
    {open && <SnackBar text={text} />}
    </>
}