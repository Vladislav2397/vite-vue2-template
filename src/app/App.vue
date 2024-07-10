<template>
    <div class="app">
        <h1>Application</h1>
        <button-component>Some value</button-component>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from '../shared/ui/Button'

export default defineComponent({
    name: 'App',
    components: {
        'button-component': Button,
    },
})
</script>
