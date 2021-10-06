import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import React, {FC, useState} from "react";
import {SearchStyles} from "./SearchStyle";

type SearchType = {
    searchProduct: (q: string) => void
}
const Search: FC<SearchType> = ({searchProduct}) => {

    const [text, setText] = useState('')

    const classes = SearchStyles()
    const onKeyPressHandler = (event: any) => {
        if (event.key == 'Enter') {
            searchProduct(text)
            setText('')
        }
    }
    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon/>
            </div>
            <InputBase
                placeholder="Search…"
                value={text}
                onChange={(e) => setText(e.target.value)}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                onKeyPress={(e) => onKeyPressHandler(e)}
                inputProps={{'aria-label': 'search'}}
            />
        </div>
    )
}

export default Search;