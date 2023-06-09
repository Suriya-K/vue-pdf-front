<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', props.background]">
            <div class="pl-14 pt-[5.1rem]">
                <h1 class="font-notoSansThai text-small text-gray-600">SAMPLE108</h1>
            </div>
            <div class="flex flex-row flex-wrap pl-12 py-[9.6rem]">
                <div class="basis-1/2 pl-1 pt-[1.8rem]">
                    <div class="grid gap-[0.70rem]">
                        <SmallCardComponent :background-state="`url(${smallCardState.low})`" />
                        <SmallCardComponent :background-state="`url(${smallCardState.low})`" />
                        <SmallCardComponent :background-state="`url(${smallCardState.low})`" />
                        <SmallCardComponent :background-state="`url(${smallCardState.low})`" />
                        <SmallCardComponent :background-state="`url(${smallCardState.low})`" />
                        <div class="pt-2 pb-2">
                            <SmallCardComponent :addition-size="true" :background-state="`url(${smallCardState.low})`" />
                        </div>
                        <div class="pt-16">
                            <SmallCardComponent :background-state="`url(${smallCardState.low})`" />
                        </div>
                    </div>
                </div>
                <div class="grid basis-1/2 gap-4 pl-1">
                    <div v-for="item in sampleDataHighestScore">
                        <CardComponent class="bg-cover w-[20.4rem] h-64" :background-state="`url(${cardState.low})`"
                            :name="item.risk_disease" :score="item.disease_score" :intro="item.intro" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CardComponent from './cards/CardComponent.vue';
import SmallCardComponent from './cards/SmallCardComponent.vue';
const props = defineProps({
    background: String,
    sampleDataHighestScore: { type: Array<DcvHealth>, required: true }
});
// console.log(props.sampleDataHighestScore)
const cardState = {
    high: '/src/assets/img/dcv-report/large-box/large-box-high.png',
    med: '/src/assets/img/dcv-report/large-box/large-box-med.png',
    low: '/src/assets/img/dcv-report/large-box/large-box-low.png',

}
const smallCardState = {
    high: '/src/assets/img/dcv-report/small-box/small-box-high.png',
    med: '/src/assets/img/dcv-report/small-box/small-box-med.png',
    low: '/src/assets/img/dcv-report/small-box/small-box-low.png'
}
</script>