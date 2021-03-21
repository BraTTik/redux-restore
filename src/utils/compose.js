export const compose = (...fn) => (Component) => {
    return fn.reduceRight((comp, func) => {
        return func(comp)
    }, Component)
}
