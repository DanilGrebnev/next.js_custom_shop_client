'use client'
import { type FC, useEffect, memo } from 'react'

interface IOutputErrorOnClientProps {
    error?: any
    componentName?: string
}

export const OutputErrorOnClient: FC<IOutputErrorOnClientProps> = memo(
    ({ error, componentName }) => {
        useEffect(() => {
            console.error({
                componentWithError: componentName,
                ...error,
            })
        }, [])

        return <></>
    }
)

OutputErrorOnClient.displayName = 'OutputErrorOnClient'
