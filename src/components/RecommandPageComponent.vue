<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover', background]">
            <template v-if="is_recom_vitamin">
                <div class="pt-36 pl-20 box-border flex flex-row gap-2">
                    <p class="font-montserrat_regular text-head text-cyan-700">Recommendation </p>
                    <p class="font-cloud_light text-head text-center text-cyan-700">รายการคําแนะนําเฉพาะคุณ</p>
                </div>
                <div>
                    <div class="box-border pt-14 pl-32">
                        <h1 class="font-cloud_light text-head text-cyan-700">ปริมาณวิตามินและแร่ธาตุต่อวันที่แนะนํา</h1>
                    </div>
                    <div class="box-border pt-10">
                        <div class="grid grid-rows-3 justify-items-center grid-flow-col">
                            <div class="relative" v-for="(value, key) in vitaminNeed" :key="key">
                                <div class="absolute left-5 bottom-24 ">
                                    <p class="font-cloud_bold text-cyan-950 text-start">{{ recomData["rec_" + key] }}</p>
                                </div>
                                <img class="w-32" :src="setVitaminNeedImage(value)">
                                <p class="pt-2 font-cloud_light text-head text-center text-cyan-700"> {{ capitalized(key) }}
                                </p>
                            </div>
                            <!-- <img class="absolute" src="/src/assets/img/scalebar/divider.jpg"> -->
                        </div>
                    </div>
                    <div class="box-border pt-10 pl-44 pr-20">
                        <p>ข้อมูลเบื้องต้นสําหรับประชากรอายุ 19 ปีขึ้นไป
                            ข้อมูลปริมาณพื้นฐานจาก National Institues of Health, Office of Dietary
                            Supplements</p>
                        <a href="https://ods.od.nih.gov/">(https://ods.od.nih.gov/)</a>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="pt-32 pl-20 box-border flex flex-row gap-2">
                    <p class="font-montserrat_regular text-head text-cyan-700">Recommendation </p>
                    <p class="font-cloud_light text-head text-center text-cyan-700">รายการคําแนะนําเฉพาะคุณ</p>
                </div>
                <div>
                    <div class="box-border pt-14 pl-32">
                        <h1 class="font-cloud_light text-head text-cyan-700">
                            ความเสี่ยงโรคและความผิดปกติที่อาจเกิดผลเกี่ยวกับ
                            เส้นผมและหนังศีรษะของคุณ</h1>
                    </div>
                    <div class="border-box pb-52">
                        <div class="flex flex-col pl-20 pt-4">
                            <div class="w-40 h-40">
                                <img src="/src/assets/img/rect_long_name.png">
                            </div>
                            <div class="w-40 h-1">
                                <img src="/src/assets/img/rect_short_low.png">
                            </div>
                        </div>
                    </div>
                    <div class="border-box">
                        <div class="flex flex-col pl-20 pt-4">
                            <div class="w-40 h-40">
                                <img src="/src/assets/img/rect_long_name.png">
                            </div>
                            <div class="w-40 h-1">
                                <img src="/src/assets/img/rect_short_low.png">
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import { ExtractData, VitaminNeeded } from '../interfaces/summary';

var vitaminNeed: VitaminNeeded = {
    vit_a: 'high',
    vit_c: 'high',
    vit_d: 'high',
    vit_e: 'high',
    biotin: 'high',
    folate: 'high',
    iron: 'high',
    omg3: 'high',
    zinc: 'high',
};
var summaryData: any;
var recomData: any = {
    rec_vit_a: '',
    rec_vit_c: '',
    rec_vit_d: '',
    rec_vit_e: '',
    rec_biotin: '',
    rec_folate: '',
    rec_iron: '',
    rec_omg3: '',
    rec_zinc: '',
};
var infoData: any;
export default {
    name: "PageComponets",
    props: {
        background: String,
        extractData: Object as PropType<ExtractData[]>,
        is_recom_vitamin: {
            type: Boolean,
            default: false
        },
        someData: Object as any
    },
    beforeMount() {
        if (this.extractData) {
            this.summaryData = this.extractData[0];
            this.recomData = this.extractData[1];
            this.infoData = this.extractData[2];
        }
        this.setvitaminNeedValue();
    },
    data() {
        return {
            vitaminNeed,
            summaryData,
            recomData,
            infoData
        }
    },
    methods: {
        setvitaminNeedValue() {
            if (this.summaryData == undefined) { return }
            for (const data in vitaminNeed) {
                var key = data as keyof typeof this.vitaminNeed
                this.vitaminNeed[key] = this.summaryData[key];
            }
        },
        setVitaminNeedImage(value: string): string {
            const low: string = "/src/assets/img/recom_low.png"
            const high: string = "/src/assets/img/recom_medhigh.png"
            if (value === 'low') return low;
            if (value === 'high' || value === 'med') return high;
            return '';
        },
        capitalized(str: string) {
            const capitalizedFirst = str[0].toUpperCase();
            const rest = str.slice(1);
            return (capitalizedFirst + rest).replace(/[\_]/gm, '-');;
        },
    }
}
</script>