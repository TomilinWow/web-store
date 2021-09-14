import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import React from "react";
import {SearchStyles} from "./SearchStyle";


const Search = () => {

    const classes = SearchStyles()
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{'aria-label': 'search'}}
            />
        </div>
    )
}

export default Search;