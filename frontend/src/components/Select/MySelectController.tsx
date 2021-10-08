import * as React from 'react';
import MySelectStyle from "./MySelectStyle";
import {FC} from "react";
import CustomSelect from "./CustomSelect";

type MySelectType = {
    changePage: (id: number, sort: string,  categoryFilter?: any[]) => void,
    sort: string,
    filters: any[]

}
const MySelectController: FC<MySelectType> = ({changePage, sort, filters}) => {
    const [mySort, setSort] = React.useState(sort);
    const classes = MySelectStyle();

    const handleChange = (event: any) => {
        setSort(event.target.value);
        switch (event.target.value) {
            case 1: {
                return changePage(1, 'price', filters)
            }
            case 2: {
                return changePage(1, '-price', filters)
            }
            default:
                return changePage(1, '', filters)
        }
    };

    const items = [
        {id: '', city: 'None'},
        {id: 1, city: 'Price (ascending)'},
        {id: 2, city: 'Price (descending)'}
    ]

    return (
        <CustomSelect items={items} value={mySort} handleChange={handleChange} name={'Sorting'}/>
    );
}

export default MySelectController