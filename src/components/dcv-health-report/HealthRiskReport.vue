<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', props.background]">
            <div class="pl-14 pt-24">
                <h1 class="font-notoSansThai font-bold text-black">SAMPLENO</h1>
            </div>
            <CardComponent></CardComponent>
        </div>
    </div>
</template>

<script setup lang="ts">
import CardComponent from './cards/CardComponent.vue';
const props = defineProps({ background: String });
</script>