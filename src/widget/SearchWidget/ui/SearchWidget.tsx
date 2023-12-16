import { FC } from 'react'
import { Button } from '@/shared/ui/Button'

import s from './SearchWidget.module.scss'

interface SearchWidgetProps {
    className?: string
}

export const SearchWidget: FC<SearchWidgetProps> = (props) => {
    const { className } = props

    return (
        <div className={s['search-widget']}>
            <input placeholder="Search products..." />
            <Button borderRadius="right">Search</Button>
        </div>
    )
}
