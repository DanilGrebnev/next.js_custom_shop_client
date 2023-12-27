interface ICalculateOffset {
    pageNumber: number
    previewItemsOnPage: number
}
/**
 * Функция рассчитывает какое количество товаров нужно пропустить
 * при пагинации
 */

export const calculateOffset = ({
    pageNumber,
    previewItemsOnPage,
}: ICalculateOffset) => {
    const offset = pageNumber === 1 ? 0 : (pageNumber - 1) * previewItemsOnPage
    return offset
}
