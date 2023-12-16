import { FC, ReactNode } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import s from './FeedBackCard.module.scss'
import { CardWrapper } from '../CardWrapper/CardWrapper'

interface IFeedBackCardProps {
    className?: string
    img?: any
    text?: ReactNode
    name?: ReactNode
    specials?: ReactNode
    children?: ReactNode
}

export const FeedBackCard: FC<IFeedBackCardProps> = (props) => {
    const { img, text, name, className, specials, children } = props

    if (!children) {
        return (
            <CardWrapper
                width="full"
                className={clsx(s['card-wrapper'], className)}>
                <p className={s['feedback-text']}>{text}</p>

                <div className={s['user']}>
                    <Image
                        alt="user"
                        src={img}
                        width={60}
                        height={60}
                    />

                    <div className={s['user-info']}>
                        <p>{name}</p>
                        <p>{specials}</p>
                    </div>
                </div>
            </CardWrapper>
        )
    }

    return children
}
