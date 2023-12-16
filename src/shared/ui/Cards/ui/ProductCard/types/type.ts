export interface IProductCard {
    productId: number | string
    name: string
    images: { image: string }[]
    rating: number
    price: number
    description?: string
    type?: 'cell' | 'list'
}
