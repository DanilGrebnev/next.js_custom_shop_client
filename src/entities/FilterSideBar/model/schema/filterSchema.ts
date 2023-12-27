interface FilterItemChoices {
    label: string
    value: string
}

interface FilterItem {
    code: string
    label: string
    type: 'multiple_choices' | 'number' | 'choices'
    choices: FilterItemChoices[]
}

export interface IFilterSideBarSchema {
    filters: FilterItem[]
    loading: boolean
    error: any
}
