<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', props.background]">
            <div class="pl-14 pt-[5.1rem]">
                <h1 class="font-notoSansThai text-small text-gray-600">{{sample_number}}</h1>
            </div>
            <div class="flex flex-row flex-wrap pl-12 pt-[9.6rem]">
                <div class="basis-1/2 pl-1 pt-[1.8rem]">
                    <div class="grid gap-[0.70rem]">
                        <SmallCardComponent 
                            :background-state="`url(${setSmallCardColor('brain')})`" 
                            :line-state="setLineColor('brain')"
                            :name="props.groupScore['brain'][0].name" :score="props.groupScore['brain'][0].score"
                            :line-no="1" />
                        <SmallCardComponent 
                            :background-state="`url(${setSmallCardColor('eent')})`" 
                            :line-state="setLineColor('eent')"
                            :name="props.groupScore['eent'][0].name" :score="props.groupScore['eent'][0].score"
                            :line-no="2" />
                            <SmallCardComponent 
                            :background-state="`url(${setSmallCardColor('infectious')})`" 
                            :line-state="setLineColor('infectious')"
                            :name="props.groupScore['infectious'][0].name" 
                            :score="props.groupScore['infectious'][0].score"
                            :line-no="3" />
                        <div class="pt-0 pb-2">
                            <SmallCardComponent 
                            :addition-size="true" 
                            :background-state="`url(${setSmallCardColor('cardiovascular')})`"
                            :line-state="setLineColor('cardiovascular')"
                            :name="props.groupScore['cardiovascular'][0].name"
                            :score="props.groupScore['cardiovascular'][0].score" 
                            :line-no="4" />
                        </div>
                            <SmallCardComponent 
                            :background-state="`url(${setSmallCardColor('chest_abdo')})`" 
                            :line-state="setLineColor('chest_abdo')"
                            :name="props.groupScore['chest_abdo'][0].name" 
                            :score="props.groupScore['chest_abdo'][0].score"
                            :line-no="5" />
                        
                        <div class="pt-2 pb-2">
                            <SmallCardComponent 
                                :addition-size="true" 
                                :background-state="`url(${setSmallCardColor('urogenital')})`"
                                :line-state="setLineColor('urogenital')"
                                :name="props.groupScore['urogenital'][0].name"
                                :score="props.groupScore['urogenital'][0].score" 
                                :line-no="6" />
                        </div>
                        <div class="pt-[5rem]">
                            <SmallCardComponent 
                                :background-state="`url(${setSmallCardColor('joint')})`" 
                                :line-state="setLineColor('joint')"
                                :name="props.groupScore['joint'][0].name" 
                                :score="props.groupScore['joint'][0].score"
                                :line-no="7" />
                        </div>
                    </div>
                    <div class="pt-[12.8rem] pl-2 font-notoSansThai text-very_small text-gray-700 whitespace-pre-line">* PRS (Polygenic Risk Score) คือคะแนนความเสี่ยงที่คำนวณจากยีนหลายยีน<br>และถูกรายงานเป็นความเสี่ยงเทียบกับประชากรปกติ  </div>
                </div>
                <div class="flex flex-col gap-4 pl-1">
                    <div v-for="item in sampleDataHighestScore">
                        <CardComponent class="bg-cover w-[20.4rem]"
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
    sample_number: { type: String, required: true },
    sampleDataHighestScore: { type: Array<DcvHealth>, required: true },
    groupScore: <any>Object
});
const smallCardState = {
    high: '/assets/img/dcv-report/small-box/small-box-high.png',
    med: '/assets/img/dcv-report/small-box/small-box-med.png',
    low: '/assets/img/dcv-report/small-box/small-box-low.png'
}
const lineState = {
    high: '/assets/img/dcv-report/line/lineX_high.png',
    med: '/assets/img/dcv-report/line/lineX_med.png',
    low: '/assets/img/dcv-report/line/lineX_low.png'
}

function setLineColor(name: any): string {
    const score = props.groupScore[name][0].score
    let state: string = '';
    if (score >= 0 && score <= 3) return state = lineState.low
    if (score > 3 && score <= 6) return state = lineState.med
    if (score > 6 && score <= 10) return state = lineState.high
    return state;
}
function setSmallCardColor(name: any): string {
    const score = props.groupScore[name][0].score
    let state: string = '';
    if (score >= 0 && score <= 3) return state = smallCardState.low
    if (score > 3 && score <= 6) return state = smallCardState.med
    if (score > 6 && score <= 10) return state = smallCardState.high
    return state;
}
</script>