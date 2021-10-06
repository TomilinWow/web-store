import * as React from 'react';
import MySelectStyle from "./MySelectStyle";
import {FC} from "react";
import CustomSelect from "./CustomSelect";

type MySelectType = {
    fillProductsList: (id: number,  sort: string, categoryFilter?: any[]) => void,
    sort: string,
    categoryFilter: any[]
}
const MySelectController: FC<MySelectType> = ({fillProductsList, sort, categoryFilter}) => {
    const [mySort, setSort] = React.useState(sort);
    const classes = MySelectStyle();

    const handleChange = (event: any) => {
        setSort(event.target.value);
        switch (event.target.value) {
            case 'Price (ascending)': {
                return fillProductsList(1, 'price', categoryFilter)
            }
            case 'Price (descending)': {
                return fillProductsList(1, '-price', categoryFilter)
            }
            default:
                return fillProductsList(1, '', categoryFilter)
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