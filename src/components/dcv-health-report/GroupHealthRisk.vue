<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', props.background]">
            <div class="flex flex-row flex-wrap pl-12 pt-28">
                <div class="basis-1/2 pt-3">
                    <CardComponent class="w-20 pb-4" :padding-bottom="'0.3rem'" :background-state="`url(${cardState.low})`"
                        :group-list="true" />
                    <CardComponent class="w-20 pb-4" :padding-bottom="'0.01rem'" :background-state="`url(${cardState.low})`"
                        :group-list="true" />
                    <CardComponent class="w-20 pb-4" :background-state="`url(${cardState.low})`" :group-list="true" />
                    <CardComponent class="w-20" :padding-bottom="'5rem'" :background-state="`url(${cardState.low})`"
                        :group-list="true" />
                </div>
                <div class="basis-1/2 pl-1">
                    <CardComponent class="w-20 pb-4" :padding-bottom="'15.5rem'" :background-state="`url(${cardState.low})`"
                        :group-list="true" />
                    <CardComponent class="w-20 pb-4" :padding-bottom="'0.3rem'" :background-state="`url(${cardState.low})`"
                        :group-list="true" />
                    <CardComponent class="w-20 pb-4" :padding-bottom="'0.3rem'" :background-state="`url(${cardState.low})`"
                        :group-list="true" />
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