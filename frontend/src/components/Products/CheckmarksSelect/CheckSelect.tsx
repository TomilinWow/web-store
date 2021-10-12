import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MySelectStyle, {BootstrapInput} from "../../../style/MySelectStyle";
import {FC} from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

type CheckSelectType = {
    categories: any[],
    setCurrentFilters: (filter: any[]) => void,
}
const CheckSelect: FC<CheckSelectType> = ({categories, setCurrentFilters}) => {
    const [checkCategories, setCheckCategories] = React.useState<string[]>([]);
    const classes = MySelectStyle();
    const handleChange = (event: any) => {
        const value = event.target.value
        setCheckCategories(
            typeof value === 'string' ? value.split(',') : value,
        );
        setCurrentFilters(value)
    };

    return (
        <div>
            <FormControl sx={{m: 0, width: 220, mr: 1}}>
                <InputLabel className={classes.inputCustom} id="demo-multiple-checkbox-label">Filter</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={checkCategories}
                    onChange={handleChange}
                    input={<BootstrapInput/>}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {categories.map((category) => (
                        <MenuItem key={category.name} value={category.name}>
                            <Checkbox checked={checkCategories.indexOf(category.name) > -1}/>
                            <ListItemText primary={category.name}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default CheckSelect