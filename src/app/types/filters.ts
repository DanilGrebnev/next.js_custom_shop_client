interface FilterItemChoices {
    label: string
    value: string
}

interface IFilter {
    code: 'color' | 'rating' | string
    label: string
    type: 'multiple_choices' | 'number' | 'choices'
}

interface IFilterItemNumber extends IFilter {
    min_value?: number
    max_value?: number
    measure?: string
}

interface IFilterItemList extends IFilter {
    choices?: FilterItemChoices[]
}

export type IFilterItem = IFilterItemNumber & IFilterItemList
