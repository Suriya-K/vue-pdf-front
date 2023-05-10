<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover', background]">
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
    props: {
        background: String,
        is_recom_vitamin: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Radar
    },
    data() {
        return {
            chartConfig
        }
    }
}
</script>