import {makeStyles} from "@material-ui/core/styles";

export const ModalStyles = makeStyles((theme) => ({
    style: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        background: "white",
        border: '2px solid #000',
        p: 4,
    },
}))
