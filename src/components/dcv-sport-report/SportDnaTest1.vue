<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', props.background]">
            <div class="pt-52 pl-16">
                <SportInjuriesCard></SportInjuriesCard>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SportInjuriesCard from './cards/SportInjuriesCard.vue';

const props = defineProps({
    background: String,
})
</script>