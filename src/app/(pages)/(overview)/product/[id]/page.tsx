import { Metadata } from 'next'
import { getProduct, getProductTEST } from './api'
import { ProductPage as ProductPageClient } from '@/entities/productPage'
import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'

interface IProductPage {
    params: { id: string }
}

export const generateMetadata = async ({ params }: IProductPage) => {
    try {
        const product = await getProduct(params.id)
        // const product = await getProductTEST()

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

    return (
        <ClientErrorBoundary>
            <ProductPageClient productId={id} />
        </ClientErrorBoundary>
    )
}

export default ProductPage
