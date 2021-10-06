import * as React from 'react';
import MySelectStyle from "./MySelectStyle";
import {FC} from "react";
import CustomSelect from "./CustomSelect";

type MySelectType = {
    fillProductsList: (id: number,  sort: string) => void,
    sort: string,

}
const MySelectController: FC<MySelectType> = ({fillProductsList, sort}) => {
    const [mySort, setSort] = React.useState(sort);
    const classes = MySelectStyle();

    const handleChange = (event: any) => {
        setSort(event.target.value);
        switch (event.target.value) {
            case 1: {
                return fillProductsList(1, 'price')
            }
            case 2: {
                return fillProductsList(1, '-price')
            }
            default:
                return fillProductsList(1, '')
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