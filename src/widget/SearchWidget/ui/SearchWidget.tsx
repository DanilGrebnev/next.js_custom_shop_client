import { Button } from '@/shared/ui/Button'
import { ProductSearchInput } from '@/entities/productSearchInput'

import s from './SearchWidget.module.scss'

export const SearchWidget = () => {
    return (
        <div className={s['search-widget']}>
            <ProductSearchInput />
            <Button borderRadius="right">Search</Button>
        </div>
    )
}
