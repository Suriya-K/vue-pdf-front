<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover', background]">
            <h1 class="font-montserrat_regular">TESTER</h1>
            <h1 class="font-montserrat_light">TESTER</h1>
            <h1 class="font-montserrat_bold">TESTEe</h1>
            <h1>TEST</h1>
            <h1>TEST</h1>
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
import * as chartConfig from './DataChart'

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)
export default {
    name: "PageComponets",
    props: ['background'],
    components: {
        Radar
    },
    data() {
        return chartConfig
    }
}
</script>