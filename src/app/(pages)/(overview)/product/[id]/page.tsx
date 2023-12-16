import { Metadata } from 'next'
import { StandartDropDown } from '@/shared/ui/StandartDropDown'
import { ProductBuyControl } from '@/entities/product'
import { Rating } from '@/shared/ui/Rating'
import { ThumbsGallery } from '@/shared/ui/ThumbsGallery'
import { getProduct, getProductTEST } from './api'
import { BreadCrumbs } from '@/shared/ui/BreadCrumbs'
import { NavigationRoutes } from '@/app/providers/NavigationRoutes'
import mock from '@/mock/mock'

import clsx from 'clsx'
import s from './page.module.scss'

interface IProductPage {
    params: { id: string }
}

export const generateMetadata = async ({ params }: IProductPage) => {
    try {
        // const product = await getProduct(params.id)
        const product = await getProductTEST()

        return {
            title: product.name,
            description: product.description,
        }
    } catch (err) {
        console.log(err)
        return {
            title: 'default',
            description: 'default',
        }
    }
}

const ProductPage = async ({ params }: IProductPage) => {
    const { id } = params
    // const product = await getProduct(id)
    const product = await getProductTEST()

    return (
        <>
            <BreadCrumbs
                breadcrumbs={[
                    { href: NavigationRoutes.main(), label: 'Home' },
                    { href: NavigationRoutes.shop(), label: 'Shop' },
                    {
                        href: '/shop?=' + product.category.name,
                        label: product.category.name,
                    },
                    { href: '/', label: product.name, active: true },
                ]}
            />
            <section
                id="Product-Page"
                className={clsx(s.ProductPage, 'contain')}>
                <div className={s['left-col']}>
                    <ThumbsGallery
                        alt={product.name}
                        images={product.images}
                    />
                </div>
                <div className={s['right-col']}>
                    <span className={s['category-title']}>
                        {product.category.name}
                    </span>

                    <h1 className={s.name}>{product.name}</h1>

                    <Rating rating={4} />

                    <div className={s.price}>${product.price}</div>

                    <p className={s.description}>{product.description}</p>

                    <StandartDropDown title="color" />
                    <StandartDropDown title="storage" />

                    <ProductBuyControl />
                </div>
            </section>
        </>
    )
}

export default ProductPage
