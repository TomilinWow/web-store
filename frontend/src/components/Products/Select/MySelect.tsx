import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MySelectStyle from "./MySelectStyle";
import {Box, NativeSelect} from "@mui/material";
import {BootstrapInput} from "./MySelectStyle";

export default function MySelect() {
  const [sort, setSort] = React.useState('');
  const classes = MySelectStyle();

  const handleChange = (event: any) => {
    setSort(event.target.value);
  };

  return (
    <div className={classes.formCustom}>
      <FormControl sx={{m:0, minWidth: 100 }}>
        <InputLabel className={classes.inputCustom} id="demo-simple-select-autowidth-label">Sorting</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={sort}
          onChange={handleChange}
          autoWidth
          label="Sorting"
          variant='filled'
          input={<BootstrapInput />}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Price (ascending)</MenuItem>
          <MenuItem value={12}>Price (descending)</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
