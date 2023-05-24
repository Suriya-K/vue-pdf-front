<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', background]">
            page 2
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "GroupHealthRiskComponent",
    props: {
        background: String
    }
}
</script>