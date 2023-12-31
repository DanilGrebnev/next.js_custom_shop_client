import type { Metadata } from 'next'
import { type ILayout } from '../types/layout'
import { Inter } from 'next/font/google'
import { Header } from '@/widget/Header'
import { Footer } from '@/widget/Footer/ui/Footer'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { StoreProvider } from '../providers/StoreProvider'
import { ClientErrorBoundary } from '@/shared/ui/ClientErrorBoundary'

import '../styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

const RootLayout = ({ children }: ILayout) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StoreProvider>
                    <AppRouterCacheProvider>
                        <section id="App">
                            <ClientErrorBoundary>
                                <Header />
                            </ClientErrorBoundary>
                            {children}
                            <ClientErrorBoundary>
                                <Footer />
                            </ClientErrorBoundary>
                        </section>
                    </AppRouterCacheProvider>
                </StoreProvider>
            </body>
        </html>
    )
}

export default RootLayout
