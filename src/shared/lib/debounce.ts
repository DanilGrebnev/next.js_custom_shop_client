type TDebouce = <T>(
    callback: (...args: T[]) => any,
    delay: number
) => (...args: T[]) => void

export const debounce: TDebouce = (callback, delay) => {
    let timeoutId: ReturnType<typeof setTimeout>

    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(callback, delay, ...args)
    }
}
