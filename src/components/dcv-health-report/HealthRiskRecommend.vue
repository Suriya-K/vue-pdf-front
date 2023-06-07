<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', background]">
            <RecommandCardComponet :header-state="`url(${headerState.low})`"></RecommandCardComponet>
        </div>
    </div>
</template>

<script setup lang="ts">
import RecommandCardComponet from './cards/RecommandCardComponet.vue';
const props = defineProps({
    background: { type: String }
})
const headerState = {
    high: '/src/assets/img/dcv-report/large-box/large-box-header-high.png',
    med: '/src/assets/img/dcv-report/large-box/large-box-header-med.png',
    low: '/src/assets/img/dcv-report/large-box/large-box-header-low.png',

}
</script>