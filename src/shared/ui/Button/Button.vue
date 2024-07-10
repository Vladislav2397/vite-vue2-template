<template>
    <button :type="type" @click="$emit('click')"><slot /></button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

type ButtonProps = {
    type: 'button' | 'submit'
}

export default defineComponent({
    name: 'AppButton',
    props: {
        type: {
            type: String as PropType<ButtonProps['type']>,
            default: 'button',
        },
    },
})
</script>

<style scoped>
button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
}
button:hover {
    border-color: #646cff;
}
button:focus,
button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}
</style>
