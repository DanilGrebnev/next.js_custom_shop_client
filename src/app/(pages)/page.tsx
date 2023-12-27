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
