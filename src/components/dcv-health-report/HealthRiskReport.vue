<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', background]">
            
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "HealthRiskReportComponent",
    props: {
        background: String
    }
}
</script>