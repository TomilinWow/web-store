import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {ModalStyles} from './ModalStyle'
import {FC, useEffect} from "react";
import CustomSelect from "./Select/CustomSelect";

type BasicModalType = {
    styles: any,
    isModal: boolean,
    cities: any[],
    city: string,
    setCookie: (city: string) => void
}

const BasicModal: FC<BasicModalType> = React.memo(({
                                                       styles, isModal, cities,
                                                       city, setCookie
                                                   }) => {

    const [open, setOpen] = React.useState(false);
    const [cityValue, setCity] = React.useState(city);

    useEffect(() => {
        setOpen(isModal)
    }, [isModal])

    useEffect(() => {
        setOpen(isModal)
    }, [city])

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e: any) => {
        let city = e.target.value
        setCity(city)
        setCookie(cities[city - 1].city)
    }

    const classes = ModalStyles()
    return (
        <div className={classes.mt}>
            <Button onClick={handleOpen} variant="outlined" className={styles.locale}>
                {city}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={classes.style}>
                    <Typography className={classes.text} id="modal-modal-title" variant="h6" component="h2">
                        Choose your city
                    </Typography>
                    <Box className={classes.cityBox}>
                        <CustomSelect items={cities} value={cityValue} handleChange={handleChange} name={'City'}/>
                        <Button onClick={() => handleClose()}>
                            OK
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
})

export default BasicModal