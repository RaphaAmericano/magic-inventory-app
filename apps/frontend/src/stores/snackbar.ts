import { AlertColor } from "@mui/material";
import { useState, useCallback, useEffect } from "react";

export function useSnackBar(){
    const [open, setOpen] = useState(false);
    const [duration, setDuration] = useState(6000);
    const [autoHide, setAutoHide] = useState(true);
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState<AlertColor>("success");

    const openFn = useCallback(() => {
        setOpen(true);
    },[]);

    const closeFn = useCallback(() => {
        setOpen(false);
    },[]);

    function displayFeedback(message: string, severity?: AlertColor ){
        if(severity) setSeverity(severity);
        openFn();
        setText(message);
    }

    useEffect(() => {
        if(open && autoHide){
            setInterval(() => {
                closeFn(); 
                setText('');
                setSeverity('success');
            }, duration)
        }
    }, [open]);

    return { open, openFn, closeFn, setDuration, duration, setAutoHide, text, setText, severity, setSeverity, displayFeedback }
}