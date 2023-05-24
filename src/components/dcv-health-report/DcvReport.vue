<template>
    <div class="container mx-auto flex flex-col space-y-5">
        <HealthRiskReport background="bg-dcv-hr-report"></HealthRiskReport>
        <GroupHealthRisk background="bg-dcv-hr-group"></GroupHealthRisk>
        <HealthRiskRecommend background="bg-dcv-hr-rec"></HealthRiskRecommend>
    </div>
</template>

<script lang="ts">
import GroupHealthRisk from './GroupHealthRisk.vue';
import HealthRiskRecommend from './HealthRiskRecommend.vue';
import HealthRiskReport from './HealthRiskReport.vue';

export default {
    name: "DcvReport",
    components: { HealthRiskReport, GroupHealthRisk, HealthRiskRecommend }
}
</script>