interface FilterItemChoices {
    label: string
    value: string
}

type IFilterItemType = 'multiple_choices' | 'number' | 'choices'

export interface FilterItem {
    code: string
    label: string
    type: IFilterItemType
    choices: FilterItemChoices[]
}

export interface IFilterSideBarSchema {
    filters: FilterItem[]
    loading: boolean
    error: any
}
