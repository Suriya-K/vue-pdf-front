<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover', background]">
            <div class="pt-32 box-border">
                <h1 class="font-montserrat_regular">Summary สรุปผลตรวจพันธุกรรมของคุณ</h1>
            </div>

            <div>
                <div class="box-border pt-10">
                    <h1 class="font-montserrat_light">ความต้องการวิตามินและแร่ธาตุ</h1>
                </div>
                <div class="flex flex-row">
                    <div class="flex flex-col">
                        <p class="object-top">ต้องการมากกว่าปกติ</p>
                        <p class="object-bottom">ต้องการตามปกติ</p>
                    </div>
                    <div class="basis-1/12  px-2" v-for="(value, key) in vitaminNeed" :key="key">
                        <img src="/src/assets/img/scale3.gif">
                        <p class="pt-2 text-center"> {{ value }}</p>
                    </div>
                </div>
            </div>

            <h1>ความเสี่ยงโรคและความผิดปกติที่เกี่ยวข้องกับอาการผมบางศีรษะล้าน</h1>
            <div>
                <Radar :data="dataConfig.data" :options="dataConfig.options" />
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
import { ExtractData, VitaminNeeded, HairRisk } from '../interfaces/summary'
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
    vit_a: 'HIGH',
    vit_c: 'HIGH',
    vit_d: 'HIGH',
    vit_e: 'HIGH',
    biotin: 'HIGH',
    folate: 'HIGH',
    iron: 'HIGH',
    omg3: 'HIGH',
    zinc: 'HIGH',
};

var hairRisk: HairRisk = {
    alopecia: 'HIGH',
    premature_gray: 'HIGH',
    psoriasis: 'HIGH',
    dry_skin: 'HIGH',
    insomnia: 'HIGH',
    premature_menopause: 'HIGH'
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
    mounted() {
        // this.setRadarLabel();
    },
    data() {
        return {
            dataConfig,
            vitaminNeed,
            summaryData: this.extractData
        }
    },
    methods: {
        setRadarLabel() {
            for (const data in hairRisk) {
                this.dataConfig.data.labels.push(data);
                hairRisk[data] = this.summaryData[data];
                console.log(hairRisk);
            }
            // this.extractData.forEach((label, index) => {
            //     this.dataConfig.datasets[0].data[index] = this.extractData[label];
            // });
            // this.dataConfig.data.labels
        }
    }
}
</script>