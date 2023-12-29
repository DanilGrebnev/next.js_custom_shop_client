'use client'

import { TopSlider } from '@/widget/TopSlider'
import { FeaturedProducts } from '@/widget/FeaturedProducts'
import { NewProducts } from '@/widget/NewProducts'
import { FeedBackBlock } from '@/widget/FeedBackBlock'
import { BestsellerProducts } from '@/widget/BestsellerProducts'
import { ShopByFeaturedCategories } from '@/widget/ShopByFeaturedCategories'
import { fetchHomePageData } from '../model/services/fetchHomePageData'
import { useAppDispatch } from '@/shared/hooks'
import { useAppSelector } from '@/shared/hooks'
import { useEffect } from 'react'
import { HomePageSelectors } from '../model/selectors'
import { SliderSkeleton } from '@/shared/ui/Skeletons'

export const HomePage = () => {
    const dispatch = useAppDispatch()
    const homePageData = useAppSelector(HomePageSelectors.getHomePageData)
    const isLoading = useAppSelector(HomePageSelectors.getIsLoadingHomePage)

    useEffect(() => {
        dispatch(fetchHomePageData())
    }, [])

    if (isLoading) {
        return (
            <>
                <SliderSkeleton />
                <SliderSkeleton />
                <SliderSkeleton />
            </>
        )
    }

    return (
        <section id="Home-Page">
            <TopSlider sliderImages={homePageData?.sliderImages} />

            <FeaturedProducts products={homePageData?.featureProducts} />

            <NewProducts products={homePageData?.newProducts} />

            <FeedBackBlock comments={homePageData?.comments} />

            <BestsellerProducts products={homePageData?.bestsellerProducts} />

            <ShopByFeaturedCategories
                categories={homePageData?.featuredCategories}
            />
        </section>
    )
}

HomePage.displayName = 'HomePage'
