const debounche = (func, delay = 500) => {
    let timeoutId
    return (...args) => {
        if(timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args)
        }, delay)
    }

}