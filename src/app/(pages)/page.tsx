import { TopSlider } from '@/widget/TopSlider'
import { FeaturedProducts } from '@/widget/FeaturedProducts'
import { NewProducts } from '@/widget/NewProducts'
import { FeedBackBlock } from '@/widget/FeedBackBlock'
import { BestsellerProducts } from '@/widget/BestsellerProducts'
import { ShopByFeaturedCategories } from '@/widget/ShopByFeaturedCategories'
import { fetchHomePageData } from './api'
import { ReserveErrorComponent } from '@/shared/ui/ReserveErrorComponent'
import mock from '../../mock/mock'

export default async function HomePage() {
    try {
        const homePageData = await fetchHomePageData()

        return (
            <section id="Home-Page">
                <TopSlider />

                <FeaturedProducts products={[]} />

                <NewProducts products={[]} />

                {/* <FeedBackBlock /> */}

                <BestsellerProducts products={[]} />

                <ShopByFeaturedCategories />
            </section>
        )
    } catch (err) {
        return (
            <ReserveErrorComponent
                componentName="HomePage"
                error={err}
            />
        )
    }
}
