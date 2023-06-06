<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', props.background]">
            <div class="pl-14 pt-24">
                <h1 class="font-notoSansThai font-bold text-black">SAMPLENO</h1>
            </div>
            <div class="flex flex-row flex-wrap pl-12 py-[9.5rem]">
                <div class="basis-1/2 pl-1 pt-8">
                    <div class="grid gap-[0.70rem]">
                        <SmallCardComponent :background-state="`url(${smallCardState.low})`" />
                        <SmallCardComponent :background-state="`url(${smallCardState.low})`" />
                        <SmallCardComponent :background-state="`url(${smallCardState.low})`" />
                        <SmallCardComponent :background-state="`url(${smallCardState.low})`" />
                        <SmallCardComponent :background-state="`url(${smallCardState.low})`" />
                        <div class="pt-[0.4rem] pb-2">
                            <SmallCardComponent :addition-size="true" :background-state="`url(${smallCardState.low})`" />
                        </div>
                        <div class="pt-20">
                            <SmallCardComponent :background-state="`url(${smallCardState.low})`" />
                        </div>
                    </div>
                </div>
                <div class="grid basis-1/2 gap-4 pl-1">
                    <CardComponent class="bg-cover w-[20.4rem] h-64" :background-state="`url(${cardState.low})`" />
                    <CardComponent class="bg-cover w-[20.4rem] h-64" :background-state="`url(${cardState.low})`" />
                    <CardComponent class="bg-cover w-[20.4rem] h-64" :background-state="`url(${cardState.low})`" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CardComponent from './cards/CardComponent.vue';
import SmallCardComponent from './cards/SmallCardComponent.vue';
const props = defineProps({ background: String });
const cardState = {
    high: '/src/assets/img/dcv-report/large-box/large-box-high.png',
    med: '/src/assets/img/dcv-report/large-box/large-box-med.png',
    low: '/src/assets/img/dcv-report/large-box/large-box-low.png',

}
const smallCardState = {
    high: '/src/assets/img/dcv-report/normal-box/normal-box-high.png',
    med: '/src/assets/img/dcv-report/normal-box/normal-box-med.png',
    low: '/src/assets/img/dcv-report/normal-box/normal-box-low.png'
}
</script>