import { FC } from 'react'
import StarIcon from '/public/static/icons/star-icon.svg'

import clsx from 'clsx'
import s from './Rating.module.scss'

interface IRatingProps {
    className?: string
    rating?: number
}

export const Rating: FC<IRatingProps> = (props) => {
    const { rating, className } = props

    return (
        <div className={clsx(s.rating, className)}>
            {new Array(rating).fill('').map((_, i) => (
                <StarIcon
                    key={i}
                    className={s['rating-icon']}
                />
            ))}
        </div>
    )
}

Rating.displayName = 'Rating'
