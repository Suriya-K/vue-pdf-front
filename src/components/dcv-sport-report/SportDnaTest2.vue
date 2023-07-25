<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', props.background]">
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    background: String,
})
</script>