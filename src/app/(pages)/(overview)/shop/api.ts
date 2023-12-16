import { $axios } from '@/app/API'
import { IProduct } from '@/app/types/Product'
import mock from '@/mock/mock'

export const getAllProducts = async () => {
    const res = await $axios.get<IProduct[]>('products/')
    return res.data
}
export const getAllProductsTEST = async () => {
    return await Promise.resolve()
}
