export interface ICategory {
    id: number
    name: string
    slug: string
    image: string
}

export interface ICategorySchema {
    category: ICategory[]
    isLoading?: boolean
    isError?: string
}
