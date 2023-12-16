import { ContainerWithTitle } from '@/shared/ui/Containers/ContainerWithTitle'
import { Slider } from '@/shared/ui/Slider'
import { ProductCard } from '@/shared/ui/Cards'
import { IProduct } from '@/app/types/Product'
import mock from '@/mock/mock'

interface IFeaturedProductsProps {
    products: IProduct[] | undefined
}

export const FeaturedProducts = (props: IFeaturedProductsProps) => {
    const { products } = props

    return (
        <ContainerWithTitle title="Featured Products">
            <Slider
                theme="theme2"
                breakpoints="default">
                {products?.map((product, i) => {
                    return (
                        <ProductCard
                            key={i}
                            productId={product.id}
                            name={product.name}
                            images={product.images}
                            price={product.price}
                            rating={1}
                        />
                    )
                })}
            </Slider>
        </ContainerWithTitle>
    )
}
