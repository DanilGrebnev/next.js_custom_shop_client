interface FilterItemChoices {
    label: string
    value: string
}

export interface FilterItem {
    code: 'color' | 'rating' | string
    label: string
    type: 'multiple_choices' | 'number' | 'choices'
    choices: FilterItemChoices[]
}

export interface IFilterSideBarSchema {
    filters: FilterItem[]
    loading: boolean
    error: any
}
