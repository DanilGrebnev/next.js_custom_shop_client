import { StaticImageData } from 'next/image'

export interface IImage {
    image: string | StaticImageData
}

export interface ICategory {
    id: number
    name: string
    slug: string
    image: string | StaticImageData
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
    isPublished: boolean
    available: boolean
    category: ICategory
    color: string
    images: IImage[]
    averageRating: number
    numberOfRatings: number
}

export enum ProductListPreviewType {
    CELL = 'cell',
    LIST = 'list',
}
