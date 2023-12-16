import { FC } from 'react'
import { Slider } from '@/shared/ui/Slider'
import { LargeSliderCard } from '@/shared/ui/Cards'
import data from '@/mock/mock'

import clsx from 'clsx'
import s from './TopSlider.module.scss'

interface ITopSliderProps {
    className?: string
}


export const TopSlider: FC<ITopSliderProps> = async (props) => {
    const { className } = props


    return (
        <div className={clsx(s.TopSlider, 'contain', className)}>
            <Slider
                spaceBetween={20}
                slidesPerView={1}
                theme="theme1">
                {data.sliderData.map((el, i) => {
                    return <LargeSliderCard key={i} />
                })}
            </Slider>
        </div>
    )
}
