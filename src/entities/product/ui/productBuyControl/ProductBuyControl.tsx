'use client'
import Heart from '/public/static/icons/wishlist.svg'
import { FC } from 'react'
import { AmountAdded } from '@/shared/ui/AmountAdded'
import { Button } from '@/shared/ui/Button'

import clsx from 'clsx'
import s from './ProductBuyControl.module.scss'

interface IProductBuyControlProps {
    className?: string
}

export const ProductBuyControl: FC<IProductBuyControlProps> = (props) => {
    const { className } = props

    return (
        <div className={clsx(s.ProductBuyControl, className)}>
            <AmountAdded
                value={1}
                increment={() => {}}
                decrement={() => {}}
            />

            <Button
                focus={true}
                hover={true}>
                Add To Cart
            </Button>

            <Button
                focus={true}
                style={{ padding: '10px 20px' }}
                hover={true}>
                <Heart
                    fill="white"
                    width={15}
                />
            </Button>
        </div>
    )
}

ProductBuyControl.displayName = 'ProductBuyControl'
