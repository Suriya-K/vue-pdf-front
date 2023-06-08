<template>
    <div v-if="!groupList">
        <div class="relative drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] 
                ring-1 ring-gray-900/5 mx-auto max-w-lg rounded-lg w-80 bg-white">
            <div :class="setColor()" class="w-full h-auto p-1 rounded-t-lg"></div>
            <div class="relative pb-5 px-2 shadow-xl ring-1 ring-gray-900/5 mx-auto max-w-lg rounded-lg">
                <!-- replace below with v-if -->
                <div class="mx-auto max-w-md">
                    <div class="flex flex-row justify-center gap-12 pt-4">
                        <p class="font-notoSansThai text-gray-800 font-bold " v-html="name"></p>
                        <div class="relative ">
                            <div :class="setColor()"
                                class="flex w-full my-auto items-center justify-center py-1.5 px-5 rounded-lg">
                                <!-- score here -->
                                <p class="font-notoSansThai text-white">{{ score }}</p>
                            </div>
                        </div>
                    </div>
                    <hr class="border-t-1 px-7 mt-5 border-gray-300 w-auto ">
                    <div class="w-auto  pl-5 pr-2 pt-6 pb-10">
                        <!-- intro here -->
                        <p class="font-notoSansThai text-[13px] text-gray-600 text-justify  w-full">
                            {{ intro }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="flex flex-row justify-center gap-12 pt-8">
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
            </div> -->
    </div>
    <div v-else>
        <div class="relative drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] 
                ring-1 ring-gray-900/5 mx-auto max-w-lg rounded-lg w-80 bg-white">
            <div :class="setColor()" class="w-full h-auto p-1 rounded-t-lg"></div>
            <div class="relative pb-5 px-2 shadow-xl ring-1 ring-gray-900/5 mx-auto max-w-lg rounded-lg">
                <!-- replace below with v-if -->
                <div class="mx-auto max-w-md">
                    <div class="flex flex-row justify-center gap-12 pt-4">
                        <p class="font-notoSansThai text-gray-800 font-bold " v-html="name"></p>
                        <div class="relative ">
                            <div :class="setColor()" class="flex w-full my-auto items-center justify-center py-1.5 px-5 rounded-lg">
                                <!-- score here -->
                                <p class="font-notoSansThai text-white">{{ setScoreString(score) }}</p>
                            </div>
                        </div>
                    </div>
                    <hr class="border-t-1 px-7 mt-5 border-gray-300 w-auto ">
                    <div class="w-auto  pl-5 pr-2 pt-6 padding-b">
                        <!-- intro here -->
                        <div v-for="item in groupListScore" class="flex flex-row gap-24">
                            <p class="font-notoSansThai text-small_long text-gray-600 text-justify"> {{ item.name }}</p>
                            <p class="font-notoSansThai text-small_long text-gray-600 text-justify">
                                {{ setScoreString(item.score) }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    backgroundState: { type: String, required: true },
    paddingBottom: { type: String, default: '0.5rem' },
    name: { type: String, required: true, default: 'มะเร็งลำไส้ <br> (Colorectal cancer)' },
    score: { type: Number, required: true, default: 1.1 },
    intro: { type: String, required: true, default: 'มะเร็งลำไส้ใหญ่และทวารหนักเป็นมะเร็งพบบ่อยเป็นอันดับที่3ของคนไทยอาการมีได้ตั้งแต่การขับถ่ายผิดปกติถ่ายอุจจาระเป็นมูกเลือดหรือเป็นเลือดแดงสดจนถึงซีดเบื่ออาหารและน้ำหนักลดโดยไม่ทราบสาเหตุ' },
    groupList: { type: Boolean, required: true, default: false },
    extraStretch: { type: Boolean, required: false, default: false },
    groupListScore: {
        type: Array<{ name: string, score: number }>, default: [
            {
                name: 'โรคหลอดเลือดสมอง (Stroke)',
                score: 9.87
            },
            {
                name: 'โรคหลอดเลือดสมอง (Stroke)',
                score: 6.45
            },
            {
                name: 'โรคหลอดเลือดสมอง (Stroke)',
                score: 9.87
            },
            {
                name: 'โรคหลอดเลือดสมอง (Stroke)',
                score: 6.45
            }
        ]
    },
})

function setScoreString(score: number): string {
    return score.toFixed(2).toString();
}

function setColor(): string {
    const score = props.score
    let backgroundColor: string = '';
    if (score > 1 && score <= 3) return backgroundColor = 'bg-dcv-low';
    if (score > 4 && score <= 6) return backgroundColor = 'bg-dcv-med';
    if (score > 6 && score <= 10) return backgroundColor = 'bg-dcv-high';
    return backgroundColor;
}
</script>

<style scoped>
.bg {
    background-image: v-bind("props.backgroundState")
}

.padding-b {
    padding-bottom: v-bind("props.paddingBottom");
}
</style>