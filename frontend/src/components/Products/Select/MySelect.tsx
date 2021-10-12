import * as React from 'react';
import MySelectStyle, {BootstrapInput} from "../../../style/MySelectStyle";
import {FC} from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

type MySelectType = {
    setCurrentSort: (sort: string) => void,
    sort: string,
}

const MySelect: FC<MySelectType> = ({setCurrentSort, sort}) => {
    const [mySort, setSort] = React.useState(sort);
    const classes = MySelectStyle();

    const handleChange = (event: any) => {
        setSort(event.target.value);
        switch (event.target.value) {
            case 1: {
                return setCurrentSort('price')
            }
            case 2: {
                return setCurrentSort('-price')
            }
            default:
                return setCurrentSort('')
        }
    };

    const items = [
        {id: '', item: 'None'},
        {id: 1, item: 'Price (ascending)'},
        {id: 2, item: 'Price (descending)'}
    ]

    return (
        <div className={classes.formCustom}>
            <FormControl sx={{m: 0, width: 180}}>
                <InputLabel className={classes.inputCustom}
                            id="demo-simple-select-autowidth-label">Sorting</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={mySort}
                    onChange={handleChange}
                    fullWidth
                    label="Sorting"
                    input={<BootstrapInput/>}
                >
                    {items.map(item => {
                        return <MenuItem key={item.item} value={item.id}>{item.item}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    )
}

export default MySelect