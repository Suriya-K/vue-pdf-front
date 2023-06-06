<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', props.background]">
            <div class="flex flex-row flex-wrap pl-12 pt-28">
                <div class="basis-1/2 pt-3 pl-1">
                    <CardComponent class="bg-contain w-[20rem] h-[13.5rem] bg-center" :background-state="`url(${cardState.low})`" />
                    <CardComponent class="bg-contain w-[20rem] h-[13.5rem] bg-center" :background-state="`url(${cardState.low})`" />
                    <CardComponent :background-state="`url(${cardState.low})`" />
                    <CardComponent :background-state="`url(${cardState.low})`" />
                </div>
                <div class="basis-1/2">
                    <CardComponent :background-state="`url(${cardState.low})`" />
                    <CardComponent :background-state="`url(${cardState.low})`" />
                    <CardComponent :background-state="`url(${cardState.low})`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import CardComponent from './cards/CardComponent.vue';
const props = defineProps({
    background: String
})
const cardState = {
    high: '/src/assets/img/dcv-report/large-box/large-box-high.png',
    med: '/src/assets/img/dcv-report/large-box/large-box-med.png',
    low: '/src/assets/img/dcv-report/large-box/large-box-low.png',

}
</script>