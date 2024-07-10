import { describe, expect, test } from 'vitest'
import { omit } from './object'

describe('object.spec', () => {
    test('object.spec omit function', () => {
        expect(omit({ a: 1, b: 2 }, ['a'])).toStrictEqual({ b: 2 })
    })
})
