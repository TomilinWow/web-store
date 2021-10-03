

export type cartItemType = {
    id: number,
    name: string,
    quantity: number,
    price: string,

}
export type cartType = {
    items: cartItemType[],
}