import { FC } from 'react'
import { Slider } from '@/shared/ui/Slider'
import { FullWidthContainer } from '@/shared/ui/Containers/FullWidthContainer'
import { ContainerWithTitle } from '@/shared/ui/Containers/ContainerWithTitle'
import { getData } from '@/mock/mock'
import { CardByFutureCategories } from '@/shared/ui/Cards'

import clsx from 'clsx'
import { ICategory } from '@/app/types/categoryTypes'

interface IShopByFeaturedCategoriesProps {
    className?: string
    categories: ICategory[]
}

export const ShopByFeaturedCategories: FC<
    IShopByFeaturedCategoriesProps
> = async (props) => {
    const { className, categories } = props

    return (
        <div className={clsx('mr-top', className)}>
            <FullWidthContainer>
                <ContainerWithTitle title="Shop by Featured Categories">
                    <Slider
                        style={{ background: 'transparent' }}
                        breakpoints="category-slider"
                        theme="theme2">
                        {categories.map((props, i) => {
                            return (
                                <CardByFutureCategories
                                    key={i}
                                    image={props.image}
                                    name={props.name}
                                    amount={1}
                                />
                            )
                        })}
                    </Slider>
                </ContainerWithTitle>
            </FullWidthContainer>
        </div>
    )
}
