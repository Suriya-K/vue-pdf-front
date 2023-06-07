<template>
    <div class="bg-repeat-round bg">
        <div v-if="!groupList">
            <div class="flex flex-row justify-center gap-12 pt-8">
                <p class="font-notoSansThai text-gray-800 font-bold" v-html="name"></p>
                <div class="relative">
                    <img class="w-20 h-9" src="../../../assets/img/dcv-report/score-box/score-box-high.png">
                    <div class="absolute top-[-3px] left-0 w-full h-full flex items-center justify-center">
                        <p class="font-notoSansThai text-white">{{ score }}</p>
                    </div>
                </div>
            </div>
            <hr class="border-t-1 ml-7 mt-5 border-gray-300 w-[17rem]">
            <div class="w-[18.3rem] h-32 ml-5 mt-6">
                <p class="font-notoSansThai text-small_long text-gray-600 text-justify"> {{ intro }} </p>
            </div>
        </div>
        <div v-else>
            <div class="flex flex-row justify-center gap-12 pt-8">
                <p class="font-notoSansThai text-gray-800 font-bold" v-html="name"></p>
                <div class="relative">
                    <img class="w-20 h-9" src="../../../assets/img/dcv-report/score-box/score-box-high.png">
                    <div class="absolute top-[-3px] left-0 w-full h-full flex items-center justify-center">
                        <p class="font-notoSansThai text-white">{{ score }}</p>
                    </div>
                </div>
            </div>
            <hr class="border-t-1 ml-5 mt-5 border-gray-300 w-[17rem]">
            <div class="w-[18.3rem] h-32 ml-5 mt-4">
                <div v-for="item in groupListScore" class="flex flex-row gap-24">
                    <p class="font-notoSansThai text-small_long text-gray-600 text-justify"> {{ item.name }} </p>
                    <p class="font-notoSansThai text-small_long text-gray-600 text-justify"> {{ item.score }} </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    backgroundState: { type: String, required: true },
    name: { type: String, required: true, default: 'มะเร็งลำไส้ <br> (Colorectal cancer)' },
    score: { type: String, required: true, default: '10.00' },
    intro: { type: String, required: true, default: 'มะเร็งลำไส้ใหญ่และทวารหนักเป็นมะเร็งพบบ่อยเป็นอันดับที่3ของคนไทยอาการมีได้ตั้งแต่การขับถ่ายผิดปกติถ่ายอุจจาระเป็นมูกเลือดหรือเป็นเลือดแดงสดจนถึงซีดเบื่ออาหารและน้ำหนักลดโดยไม่ทราบสาเหตุ' },
    groupList: { type: Boolean, required: true, default: false },
    extraStretch: { type: Boolean, required: false, default: false },
    groupListScore: {
        type: Array<{ name: string, score: string }>, default: [
            {
                name: 'โรคหลอดเลือดสมอง (Stroke)',
                score: '9.87'
            },
            {
                name: 'โรคหลอดเลือดสมอง (Stroke)',
                score: '9.87'
            }
        ]
    },
})
</script>

<style scoped>
.bg {
    background-image: v-bind("props.backgroundState")
}
</style>