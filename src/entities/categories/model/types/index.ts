export interface Category {
    id: number
    name: string
    slug: string
    image: string
}

export interface CategorySchema {
    category: Category[]
    isLoading?: boolean
    isError?: string
}
