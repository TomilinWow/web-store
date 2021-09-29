
export type categoryState = {
    categories: any[]
}

export enum CategoryActionEnum {
    FILL_CATEGORY = 'FILL_CATEGORY'
}

type FillProductActionType = {
    type: CategoryActionEnum.FILL_CATEGORY,
    categories: any[]
}

export type CategoryAction = FillProductActionType