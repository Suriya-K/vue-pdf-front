<template>
    <div class="container mx-auto">
        <div class="navbar bg-white">
            <a class="">PDF Generator</a>
        </div>
        <UploadComponent @uploaded="getUploadData"></UploadComponent>
        <SummaryPageComponent :extract-data="summary_data[0]" background="bg-sum"></SummaryPageComponent>
        <RecommandPageComponent :is_recom_vitamin='true' background="bg-rec-nutrient"></RecommandPageComponent>
        <RecommandPageComponent background="bg-rec-disease"></RecommandPageComponent>
    </div>
</template>

<script lang="ts">
import SummaryPageComponent from './SummaryPageComponent.vue';
import RecommandPageComponent from './RecommandPageComponent.vue';
import UploadComponent from './UploadComponent.vue';
import { ExtractData } from '../interfaces/summary';

export default {
    name: "PageViewComponent",
    components: {
        SummaryPageComponent,
        RecommandPageComponent,
        UploadComponent
    },
    data() {
        return {
            summary_data: [] as ExtractData[]
        }
    },
    computed: {
        moduloPage() {
            return true;
        }
    },
    methods: {
        getUploadData(data: Array<ExtractData>) {
            this.summary_data = data
        }
    }
}
</script>