import React, {FC, useState} from 'react'
import {Alert, Snackbar} from "@mui/material";

type FlashMessageType = {
    message: string,
    type: any
}
const FlashMessage: FC<FlashMessageType> = ({message, type}) => {
    const [open, setOpen] = useState(true)


    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={type} sx={{width: '100%'}}>
                    {message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default FlashMessage
