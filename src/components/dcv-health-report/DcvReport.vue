<template>
    <div class="container mx-auto flex flex-col space-y-5" ref="dcvReport">
        <HealthRiskReport background="bg-dcv-hr-report"></HealthRiskReport>
        <GroupHealthRisk background="bg-dcv-hr-group opacity-50"></GroupHealthRisk>
        <HealthRiskRecommend background="bg-dcv-hr-rec opacity-50"></HealthRiskRecommend>
    </div>
</template>

<script lang="ts">
import GroupHealthRisk from './GroupHealthRisk.vue';
import HealthRiskRecommend from './HealthRiskRecommend.vue';
import HealthRiskReport from './HealthRiskReport.vue';

export default {
    name: "DcvReport",
    props: [
        'report'
    ],
    data() {
        return {
            healthData: ''
        }
    },
    beforeCreate() {
        console.log(this.report);
        console.log(this.$route.params.report)
    },
    components: { HealthRiskReport, GroupHealthRisk, HealthRiskRecommend },
    methods: {
        getHighestRiskhScore() {
            // if score greater than 6 and has intro
        },
        getRiskGroupScore() {
            //get average score filter by category
        },
        getRiskGroupScoreGreaterThan6() {
            // if has checkup and risk_reduction
        }
    }
}
</script>