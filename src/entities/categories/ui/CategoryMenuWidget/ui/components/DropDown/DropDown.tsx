import { memo } from 'react'
import { Title } from '@/shared/ui/Title'
import { Category } from '@/entities/categories/model/types'

import Link from 'next/link'
import s from './DropDown.module.scss'

// import data from '@/mock/mock'

interface IDropDown {
    categories: Category[]
}

export const DropDown = memo((props: IDropDown) => {
    const { categories } = props

    return (
        <nav>
            <Title hidden={true}>Category menu</Title>
            <ul className={s['category-widget-content']}>
                {categories.map(({ id, name }) => (
                    <li key={id}>
                        <Link href="/shop">{name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
})

DropDown.displayName = 'DropDown'
