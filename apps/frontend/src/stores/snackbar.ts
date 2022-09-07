import { useState, useCallback, useEffect } from "react";

export function useSnackBar(){
    const [open, setOpen] = useState(false);
    const [duration, setDuration] = useState(6000);
    const [autoHide, setAutoHide] = useState(true);
    const [text, setText] = useState("");

    const openFn = useCallback(() => {
        setOpen(true);
    },[]);

    const closeFn = useCallback(() => {
        setOpen(false);
    },[]);

    // useEffect(() => {
    //     if(open && autoHide){
    //         setInterval(() => closeFn(), duration)
    //     }
    // }, [open]);

    return { open, openFn, closeFn, setDuration, setAutoHide, text, setText }
}