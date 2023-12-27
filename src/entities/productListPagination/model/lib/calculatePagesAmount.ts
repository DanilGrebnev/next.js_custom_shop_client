interface ICalculatePagesAmountProps {
    productsAmount: number
    previewItemsOnPage: number
}
/**
 * Функция расчёта количества страниц при пагинации
 */
export const calculatePagesAmount = ({
    productsAmount,
    previewItemsOnPage,
}: ICalculatePagesAmountProps) => {
    const pagesAmount = productsAmount / previewItemsOnPage

    return pagesAmount % 0 !== 1 ? Math.ceil(pagesAmount) : pagesAmount
}
