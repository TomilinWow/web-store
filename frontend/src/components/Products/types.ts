
export type ProductListContainerType = {
    fillProductsList: (id: number, sort?: string, categoryFilter?: any[]) => void,
    addItemToCart: (id: number) => void,
    productsList: any[],
    currentPage: number,
    isFetching: boolean,
    totalItems: number,
    perPages: number,
    sort: string,
    categories: any[],
    categoryFilter: any[],

}