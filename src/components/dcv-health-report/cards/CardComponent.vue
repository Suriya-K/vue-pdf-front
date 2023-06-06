<template>
    <div class="bg-no-repeat bg">
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    backgroundState: { type: String, required: true },
})
</script>

<style scoped>
.bg {
    background-image: v-bind("props.backgroundState")
}
</style>