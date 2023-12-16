export interface IImage {
    image: string
}

export interface ICategory {
    id: number
    name: string
    slug: string
    image: string
}

export interface IProduct {
    id: number
    createdAt: string
    updatedAt: string
    name: string
    slug: string
    description: string
    price: number
    quantity: number
    available: boolean
    isPublished: boolean
    category: ICategory
    images: IImage[]
}

export enum ProductListPreviewType {
    CELL = 'cell',
    LIST = 'list',
}
