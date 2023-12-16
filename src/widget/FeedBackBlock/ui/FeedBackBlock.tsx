import { FC } from 'react'
import { Slider } from '@/shared/ui/Slider'
import { FullWidthContainer } from '@/shared/ui/Containers/FullWidthContainer/ui/FullWidthContainer'
import { ContainerWithTitle } from '@/shared/ui/Containers/ContainerWithTitle'
import { FeedBackCard } from '@/shared/ui/Cards'

import clsx from 'clsx'

import { getData } from '@/mock/mock'

interface IFeedBackBlockProps {
    className?: string
}

export const FeedBackBlock: FC<IFeedBackBlockProps> = async (props) => {
    const { className } = props

    const { fakeCustomers } = await getData(100)

    return (
        <div className={clsx(className, 'mr-top')}>
            <FullWidthContainer>
                <ContainerWithTitle title="See What Our Customers Says">
                    <Slider
                        breakpoints="feedback-slider"
                        spaceBetween={20}
                        theme="theme2">
                        {fakeCustomers.map(({ src, ...props }, i) => {
                            return (
                                <FeedBackCard
                                    key={i}
                                    img={src}
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
