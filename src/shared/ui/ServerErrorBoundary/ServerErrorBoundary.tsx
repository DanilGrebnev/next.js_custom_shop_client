'use client'

import { useEffect } from 'react'
import { ErrorPage } from '../ErrorPage'

export const ServerErrorBoundary = ({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) => {
    useEffect(() => {
        console.log(error)
    }, [error])

    return (
        <ErrorPage
            error={error}
            reset={reset}
        />
    )
}
