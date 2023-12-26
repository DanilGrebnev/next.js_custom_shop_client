import { TopSlider } from '@/widget/TopSlider'
import { FeaturedProducts } from '@/widget/FeaturedProducts'
import { NewProducts } from '@/widget/NewProducts'
import { FeedBackBlock } from '@/widget/FeedBackBlock'
import { BestsellerProducts } from '@/widget/BestsellerProducts'
import { ShopByFeaturedCategories } from '@/widget/ShopByFeaturedCategories'
import { ReserveErrorComponent } from '@/shared/ui/ReserveErrorComponent'
import { IHomePageProducts } from '../types/HomePage'
import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'
import mock from '../../mock/mock'
import { HomePage } from '@/entities/homePage'

export default async function HomePages() {
    return (
        <ClientErrorBoundary>
            <HomePage />
        </ClientErrorBoundary>
    )
}
