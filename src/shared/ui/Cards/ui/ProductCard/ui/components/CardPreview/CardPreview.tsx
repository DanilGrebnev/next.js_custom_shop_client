import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'

import clsx from 'clsx'
import s from './CardPreview.module.scss'

interface ICardPreviewProps {
    className?: string
    images: { image: string | StaticImageData }[]
    alt: string
}

export const CardPreview: FC<ICardPreviewProps> = (props) => {
    const { images, alt, className } = props

    return (
        <div className={clsx(s['card-preview'], className)}>
            {images?.map(({ image }, i) => {
                return (
                    <Image
                        key={i}
                        alt={alt}
                        width={200}
                        height={200}
                        className={clsx(s.img, s[`preview-${i}`])}
                        src={image}
                    />
                )
            })}
        </div>
    )
}
