<template>
    <div class="container mx-auto">
        <!-- <div class="navbar bg-white">
            <a class="font-montserrat_bold text-head text-yellow-400">PDF Generator</a>
        </div> -->
        <!-- <UploadComponent :report-type="report" @uploaded="getUploadData"></UploadComponent> -->
        <div class="flex flex-col space-y-10">
            <SummaryPageComponent :extract-data="summary_data[0]" background="bg-sum"></SummaryPageComponent>
            <RecommandPageComponent :extract-data="summary_data" :is_recom_vitamin='true' background="bg-rec-nutrient">
            </RecommandPageComponent>
            <RecommandPageComponent background="bg-rec-disease" :some-data="summary_data[2] && summary_data[3]">
            </RecommandPageComponent>
            <RecommandPageComponent background="bg-rec-disease" :some-data="summary_data[2] && summary_data[3]">
            </RecommandPageComponent>
            <RecommandPageComponent background="bg-rec-disease" :some-data="summary_data[2] && summary_data[3]">
            </RecommandPageComponent>
        </div>
    </div>
</template>

<script lang="ts">
import SummaryPageComponent from './SummaryPageComponent.vue';
import RecommandPageComponent from './RecommandPageComponent.vue';
import UploadComponent from './UploadComponent.vue';
import { ExtractData } from '../../interfaces/summary';
import axios from 'axios';

export default {
    name: "PageViewComponent",
    components: {
        SummaryPageComponent,
        RecommandPageComponent,
        UploadComponent
    }, props: [
        'reportType'
    ],
    async beforeMount() {
        await this.getUploadData();
    },
    data() {
        return {
            report: this.reportType,
            summary_data: [] as ExtractData[]
        }
    },
    computed: {
    },
    methods: {
        async getUploadData() {
            try {
                const data = await axios.get('http://localhost:3333/test');
                console.log(data);
                // this.summary_data = data
            } catch (e) {

            }
        },
    }
}
</script>