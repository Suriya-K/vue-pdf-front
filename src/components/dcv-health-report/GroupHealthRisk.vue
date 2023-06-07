<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', props.background]">
            <div class="flex flex-row flex-wrap pl-12 pt-28">
                <div class="basis-1/2 pt-3 pl-1">
                    <div class="relative w-80 h-56">
                        <CardComponent class="absolute inset-0" :background-state="`url(${cardState.low})`"
                            :group-list="true" />
                    </div>
                    <div class="box w-80 h-52">
                        <CardComponent class="bg-contain w-auto h-48" :background-state="`url(${cardState.low})`"
                            :group-list="true" />
                    </div>
                    <div class="box w-80 h-32 mt-[-1rem]">
                        <CardComponent class="bg-contain w-auto h-52" :background-state="`url(${cardState.low})`"
                            :group-list="true" />
                    </div>
                    <div class="box w-[20.2rem] h-60 pt-[5.6rem]">
                        <CardComponent class="bg-contain w-auto h-[20.5rem]" :background-state="`url(${cardState.low})`"
                            :group-list="true" />
                    </div>
                </div>
                <div class="basis-1/2">
                    <div class="box w-[20.5rem] h-[28.5rem] pl-1 pt-[0.9rem]">
                        <CardComponent class="bg-cover w-auto h-[28.5rem]" :background-state="`url(${cardState.low})`"
                            :group-list="true" :extra-stretch="true" />
                    </div>
                    <div class="box w-[20.5rem] h-12 pt-[1rem]">
                        <CardComponent class="bg-contain w-auto h-[11.2rem]" :background-state="`url(${cardState.low})`"
                            :group-list="true" />
                    </div>
                    <div class="box w-[20.5rem] h-12 pt-[9.7rem]">
                        <CardComponent class="bg-contain w-auto h-[12rem]" :background-state="`url(${cardState.low})`"
                            :group-list="true" />
                    </div>
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