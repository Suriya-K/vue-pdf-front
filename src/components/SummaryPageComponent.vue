<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover', background]">
            <div class="pt-32 pl-20 box-border flex flex-row gap-2">
                <p class="font-montserrat_regular text-head text-cyan-700">Summary </p>
                <p class="font-cloud_light text-head text-center text-cyan-700">สรุปผลตรวจพันธุกรรมของคุณ</p>
            </div>

            <div>
                <div class="box-border pt-6 pl-32">
                    <h1 class="font-cloud_light text-head text-cyan-700">ความต้องการวิตามินและแร่ธาตุ</h1>
                </div>
                <div class="flex flex-row pl-5">
                    <div class="flex flex-col pt-7 text-center">
                        <p class="object-top text-red-700">ต้องการมากกว่าปกติ</p>
                        <p class="text-cyan-700">ต้องการตามปกติ</p>
                    </div>
                    <div class="basis-1/6 px-2" v-for="(value, key) in vitaminNeed" :key="key">
                        <img :src="setVitaminNeedImage(value)">
                        <p class="pt-2 text-center text-cyan-700"> {{ capitalized(key) }}</p>
                    </div>
                    <!-- <img class="absolute" src="/src/assets/img/scalebar/divider.jpg"> -->
                </div>
            </div>
            <div class="box-content pl-32 pr-10 mt-16">
                <p class="font-cloud_light text-head text-cyan-700">
                    ความเสี่ยงโรคและความผิดปกติที่เกี่ยวข้องกับอาการผมบางศีรษะล้าน</p>
                <div class="relative flex flex-row pr-20">
                    <Radar class="w-full h-56" :data="dataConfig.data" :options="dataConfig.options" />
                    <div class="box-border flex flex-col w-full">
                        <p class="font-montserrat_bold">Risk:</p>
                        <p class="font-montserrat_bold">H = High</p>
                        <p class="font-montserrat_bold">M = Medium</p>
                        <p class="font-montserrat_bold">L = Low</p>
                    </div>
                </div>
            </div>
            <div class="box-border">
                <p class="font-cloud_light pl-32 pt-3 relative text-head text-cyan-700">
                    การตอบสนองต่อยารักษาอาการผมบางศีรษะล้าน</p>
                <div class="box-border flex flex-col">
                    <div class="flex flex-row-reverse gap-14 pr-16">
                        <p class="font-cloud_light text-small text-cyan-700">Low</p>
                        <p class="font-cloud_light text-small text-center text-cyan-700">Slightly <br>low</p>
                        <P class="font-cloud_light text-small text-cyan-700">Normal</P>
                    </div>
                    <div class="basis-10/12 flex flex-row-reverse pr-14  pt-2" v-for="(value, key) in responseToMedicine"
                        :key="key">
                        <div class="flex flex-row">
                            <p class="font-cloud_light text-head pr-16 text-cyan-700"> {{ capitalized(key) }}</p>
                            <img class="h-6 w-72" :src="setresponseToMedicineImage(value)">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'
import * as dataConfig from './DataChart'
import { ExtractData, VitaminNeeded, HairRisk, ResponseToMedicine } from '../interfaces/summary'
import { PropType } from 'vue'


ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)
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

var hairRisk: HairRisk = {
    alopecia: 3,
    premature_gray: 3,
    psoriasis: 3,
    dry_skin: 3,
    insomnia: 3,
    premature_menopause: 3
}

var responseToMedicine: ResponseToMedicine = {
    minoxidil: "high",
    dutasteride: "high",
    finasteride: "high"
}

export default {
    name: "SummaryPageComponent",
    props: {
        background: String,
        extractData: Object as PropType<ExtractData>,
    },
    components: {
        Radar
    },
    beforeMount() {
        this.setvitaminNeedValue();
        this.setRadarLabel();
    },
    data() {
        return {
            dataConfig,
            vitaminNeed,
            hairRisk,
            responseToMedicine,
            summaryData: this.extractData
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
        setRadarLabel() {
            if (this.summaryData === undefined) { return }
            for (const data in hairRisk) {
                var key = data as keyof typeof this.hairRisk
                if (this.summaryData[key] === 'high') hairRisk[key] = 3;
                if (this.summaryData[key] === 'med') hairRisk[key] = 2;
                if (this.summaryData[key] === 'low') hairRisk[key] = 1;
                console.log(hairRisk[key]);
                this.dataConfig.data.datasets[0].data.push(hairRisk[key]);
            }
            // this.extractData.forEach((label, index) => {
            //     this.dataConfig.datasets[0].data[index] = this.extractData[label];
            // });
            // this.dataConfig.data.labels
        },
        capitalized(str: string) {
            const capitalizedFirst = str[0].toUpperCase();
            const rest = str.slice(1);
            return (capitalizedFirst + rest).replace(/[\_]/gm, '-');;
        },
        setVitaminNeedImage(value: string): string {
            const high: string = "/src/assets/img/scale3.gif";
            const medium: string = "/src/assets/img/scale2.gif";
            const low: string = "/src/assets/img/scale1.gif";
            if (value === "high") return high;
            if (value === "med") return medium;
            if (value === "low") return low;
            return '';
        },
        setresponseToMedicineImage(value: string): string {
            const low: string = "/src/assets/img/scaledot/scalehigh.jpg";
            const med: string = "/src/assets/img/scaledot/scalemed.jpg";
            const normal: string = "/src/assets/img/scaledot/scalelow.jpg";
            if (value === "high") return low;
            if (value === "med") return med;
            if (value === "low") return normal;
            return '';
        }
    }
}
</script>