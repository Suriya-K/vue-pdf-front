<template>
    <div v-if="!additionSize">
        <div class="bg w-[7rem] h-12 bg-contain bg-no-repeat">
            <div class="flex flex-row align-middle pr-4">
                <p class="pl-2 pt-2 font-notoSansThai font-bold text-white text-very_small">{{ name }}</p>
                <p class="pt-2 font-notoSansThai font-bold text-white text-very_small ml-auto">{{ setScoreString(score) }}</p>
            </div>
        </div>
        <div class="absolute pl-[7.3rem] mt-[-2.2rem]">
            <!-- แก้ warning ยังไงอ่ะ 555555 โง่จ๊าด เขียน TS ไม่เป็นคับผม -->
            <img class="h-full" :class="lineClassState[props.lineNo]" :src="props.lineState.replace(/X/, props.lineNo.toString())">
        </div>
    </div>
    <div v-else>
        <div class="bg w-[8.4rem] h-14 bg-contain bg-no-repeat">
            <div class="flex flex-row gap-4 align-middle pr-5">
                <p class="pl-2 pt-1 font-notoSansThai font-bold text-white text-very_small whitespace-pre-line" >{{ name.replace(/หลอด/,"\nหลอด").replace(/วะ/,"วะ\n") }}</p>
                <p class="font-notoSansThai font-bold text-white text-very_small self-center ml-auto">{{ setScoreString(score) }}
                </p>
            </div>
        </div>
        <div class="absolute pl-[8.5rem] mt-[-2.7rem]">
            <!-- แก้ warning ยังไงอ่ะ 555555 โง่จ๊าด เขียน TS ไม่เป็นคับผม -->
            <img class="h-full" :class="lineClassState[props.lineNo]" :src="props.lineState.replace(/X/, props.lineNo.toString())">
        </div>
    </div>
</template>


<script setup lang="ts">
const props = defineProps({
    backgroundState: { type: String, required: true },
    lineState: { type: String, required: true },
    lineNo: { type: Number, required: true },
    additionSize: { type: Boolean, required: false, default: false },
    name: { type: String, required: true, default: 'อกและท้อง' },
    nameLong: { type: String, required: false, default: 'ทางเดินปัสสาวะ<br>และสืบพันธุ์' },
    score: { type: Number, required: true, default: 10.00 }
})
// const lineStateNo = props.lineState.replace(/X/,props.lineNo)
const lineClassState: any = {
    1: 'w-[8.5rem]',
    2: 'w-[8.5rem]',
    3: 'w-[1.8rem]',
    4: 'w-[9.2rem]',
    5: 'w-[8.5rem]',
    6: 'w-[8rem]',
    7: 'w-[8.5rem] -mt-36'
}


function setScoreString(score: number): string {
    return score.toFixed(2).toString();
}
</script>

<style scoped>
.bg {
    background-image: v-bind("props.backgroundState")
}
</style>