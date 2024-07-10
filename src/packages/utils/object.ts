export function omit<T extends Record<string, unknown>>(
    obj: T,
    fields: (keyof T)[]
) {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => !fields.includes(key as keyof T))
    )
}

export function pick<T extends Record<string, unknown>>(
    obj: T,
    fields: (keyof T)[]
) {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => fields.includes(key as keyof T))
    )
}
