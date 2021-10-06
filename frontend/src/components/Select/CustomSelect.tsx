import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MySelectStyle, {BootstrapInput} from "./MySelectStyle";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import {FC} from "react";

type CustomSelectType = {
    items: any[],
    value: any,
    handleChange: any,
    name: string
}

const CustomSelect: FC<CustomSelectType> = ({items, value, handleChange, name}) => {
    const classes = MySelectStyle();
    return (
        <div className={classes.formCustom}>
            <FormControl sx={{m: 0, width: 180}}>
                <InputLabel className={classes.inputCustom} id="demo-simple-select-autowidth-label">{name}</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={value}
                    onChange={handleChange}
                    autoWidth
                    label="Sorting"
                    input={<BootstrapInput/>}
                >
                    {items.map(item => {
                        return <MenuItem value={item.id}>{item.city}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    )
}


export default CustomSelect












































































































































































