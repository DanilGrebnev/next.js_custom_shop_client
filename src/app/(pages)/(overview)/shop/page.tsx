import type { Metadata } from 'next'
// import { ShopSideBar } from '@/entities/shop'
import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import { ReserveErrorComponent } from '@/shared/ui/ReserveErrorComponent'
import { ProductList } from '@/entities/productList'
import { FilterSideBar } from '@/entities/FilterSideBar'

import clsx from 'clsx'
import s from './page.module.scss'

import mock from '@/mock/mock'

export const metadata: Metadata = {
    title: 'Shop',
    description: 'Shop description',
}

// type TGetData = { offset: number; limit: number }

// async function getData({ offset, limit }: TGetData) {
//     const searhParams = new URLSearchParams()

//     searhParams.append('offset', offset + '')
//     searhParams.append('limit', limit + '')

//     console.log(searhParams.toString())

//     const url = 'products?' + searhParams.toString()
//     const res = await $axios.get<IShopResponse>(url.toString())

//     // Добавляем хост в путь для изображений
//     res.data.products.map((product) => {
//         product.images.map((imageItem) => {
//             const src = 'http://localhost:8000' + imageItem.image
//             imageItem.image = src

//             return imageItem
//         })

//         return product
//     })

//     return res.data
// }

export default async function ShopPage() {
    try {
        return (
            <>
                <BreadCrumbs
                    current="Shop"
                    breadcrumbs={[
                        { href: NavigationRoutes.main(), label: 'Home' },
                        {
                            href: NavigationRoutes.shop(),
                            label: 'Shop',
                            active: true,
                        },
                    ]}
                />
                <section
                    id="Shop-Page"
                    className={clsx('contain', s['shop-page'])}>
                    <FilterSideBar />
                    <ProductList />
                </section>
            </>
        )
    } catch (err) {
        return (
            <ReserveErrorComponent
                error={err}
                componentName="Shop"
            />
        )
    }
}

// const products = new Array(20).fill((mock.productById as IProduct))
