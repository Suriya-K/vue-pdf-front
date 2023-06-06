<template>
    <div class="bg w-[6.7rem] h-12 bg-contain bg-no-repeat" v-if="!props.additionSize">
        <p class="t">no</p>
    </div>
    <div class="bg w-[8.1rem] h-12 bg-contain bg-no-repeat" v-else>
        <p class="t">yes</p>
    </div>
</template>


<script setup lang="ts">
const props = defineProps({
    backgroundState: { type: String, required: true },
    additionSize: { type: Boolean, required: false, default: false }
})
</script>

<style scoped>
.bg {
    background-image: v-bind("props.backgroundState")
}
</style>