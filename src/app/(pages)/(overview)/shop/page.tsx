import type { Metadata } from 'next'
import { ShopSideBar } from '@/entities/shop'
import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { getAllProducts } from './api'
import { ProductList } from '@/widget/ProductList'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import mock from '@/mock/mock'

// import mock from '@/mock/mock'
import clsx from 'clsx'
import s from './page.module.scss'
import { IProduct } from '@/app/types/Product'

export const metadata: Metadata = {
    title: 'Shop',
    description: 'Shop description',
}

const ShopPage = async () => {
    // const products = await getAllProducts()

    const products = new Array(20).fill((mock.productById as IProduct))

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
                <ShopSideBar />
                <ProductList products={products} />
            </section>
        </>
    )
}

export default ShopPage
