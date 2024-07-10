import { describe, expect, test } from 'vitest'
import { fireEvent, render } from '@testing-library/vue'

import Button from './Button.vue'

describe('Button.spec', () => {
    test('Snapshot', () => {
        const { html } = render(Button, {
            slots: {
                default: 'text',
            },
        })

        expect(html()).toMatchSnapshot()
    })

    test('emit click when clicked by button', async () => {
        const { emitted, getByRole } = render(Button, {
            props: {
                role: 'button',
            },
            slots: {
                default: 'text',
            },
        })

        await fireEvent.click(getByRole('button'))

        expect(emitted()).toHaveProperty('click')
    })
})
