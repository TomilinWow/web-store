import React, {FC, useEffect} from 'react';
import {fillCategory} from "../../../store/reducers/category/category-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import Header from "./Header";
import {RootState} from "../../../store/store";

type HeaderContainerType = {
    fillCategory: () => void,
    categories: any[]
}
const HeaderContainer: FC<HeaderContainerType> = React.memo(({fillCategory, categories}) => {

    useEffect(() => {
        fillCategory()
    }, [])
    return (

        <Header categories={categories}/>
    )
})

const mapStateToProps = (state: RootState) => {
    return {
        categories: state.category.categories
    }
}
export default compose(
    connect(mapStateToProps,
        {
            fillCategory
        }),
)(HeaderContainer)