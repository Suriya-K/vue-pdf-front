<template>
    <div class="container mx-auto">
        <!-- <div class="navbar bg-white">
            <a class="font-montserrat_bold text-head text-yellow-400">PDF Generator</a>
        </div> -->
        <UploadComponent @uploaded="getUploadData"></UploadComponent>
        <SummaryPageComponent :extract-data="summary_data[0]" background="bg-sum"></SummaryPageComponent>
        <RecommandPageComponent :extract-data="summary_data" :is_recom_vitamin='true' background="bg-rec-nutrient">
        </RecommandPageComponent>
        <RecommandPageComponent background="bg-rec-disease" :some-data="summary_data[2] && summary_data[3]"></RecommandPageComponent>
        <RecommandPageComponent background="bg-rec-disease" :some-data="summary_data[2] && summary_data[3]"></RecommandPageComponent>
        <RecommandPageComponent background="bg-rec-disease" :some-data="summary_data[2] && summary_data[3]"></RecommandPageComponent>
    </div>
</template>

<script lang="ts">
import SummaryPageComponent from './SummaryPageComponent.vue';
import RecommandPageComponent from './RecommandPageComponent.vue';
import UploadComponent from './UploadComponent.vue';
import { ExtractData } from '../../interfaces/summary';

export default {
    name: "PageViewComponent",
    components: {
        SummaryPageComponent,
        RecommandPageComponent,
        UploadComponent
    },
    beforeMount() {
    },
    data() {
        return {
            summary_data: [] as ExtractData[]
        }
    },
    computed: {
    },
    methods: {
        getUploadData(data: Array<ExtractData>) {
            this.summary_data = data
        },
    }
}
</script>