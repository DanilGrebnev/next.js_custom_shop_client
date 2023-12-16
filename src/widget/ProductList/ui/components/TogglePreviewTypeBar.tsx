'use client'

import { type FC, memo } from 'react'
import { ToggleViewButton } from '@/shared/ui/ToggleViewButton'
import { ProductListPreviewType } from '@/app/types/Product'

import clsx from 'clsx'

interface ITogglePreviewTypeBarProps {
    className?: string
    previewType: ProductListPreviewType
    setRowPreviewType: () => void
    setCellPreviewType: () => void
}

export const TogglePreviewTypeBar: FC<ITogglePreviewTypeBarProps> = memo(
    (props) => {
        const {
            previewType,
            setCellPreviewType,
            setRowPreviewType,
            className,
        } = props

        return (
            <div className={clsx(className)}>
                <ToggleViewButton
                    onClick={setCellPreviewType}
                    active={previewType === ProductListPreviewType.CELL}
                />

                <ToggleViewButton
                    onClick={setRowPreviewType}
                    active={previewType === ProductListPreviewType.LIST}
                    theme="list"
                />
            </div>
        )
    }
)

TogglePreviewTypeBar.displayName = 'TogglePreviewTypeBar'
