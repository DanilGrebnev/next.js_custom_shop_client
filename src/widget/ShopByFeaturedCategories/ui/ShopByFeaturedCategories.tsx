import { FC } from 'react'
import { Slider } from '@/shared/ui/Slider'
import { FullWidthContainer } from '@/shared/ui/Containers/FullWidthContainer'
import { ContainerWithTitle } from '@/shared/ui/Containers/ContainerWithTitle'
import { getData } from '@/mock/mock'
import { CardByFutureCategories } from '@/shared/ui/Cards'

import clsx from 'clsx'

interface IShopByFeaturedCategoriesProps {
    className?: string
}

export const ShopByFeaturedCategories: FC<
    IShopByFeaturedCategoriesProps
> = async (props) => {
    const { className } = props

    const { shopByFeaturedCategories } = await getData(100)

    return (
        <div className={clsx('mr-top', className)}>
            <FullWidthContainer>
                <ContainerWithTitle title="Shop by Featured Categories">
                    <Slider
                        style={{ background: 'transparent' }}
                        breakpoints="category-slider"
                        theme="theme2">
                        {shopByFeaturedCategories.map((props, i) => {
                            return (
                                <CardByFutureCategories
                                    key={i}
                                    {...props}
                                />
                            )
                        })}
                    </Slider>
                </ContainerWithTitle>
            </FullWidthContainer>
        </div>
    )
}
