<template>
    <div v-if="!groupList">
        <div class="relative drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] 
                ring-1 ring-gray-900/5 mx-auto max-w-lg rounded-lg w-80 bg-white">
            <div :class="setColor()" class="w-full h-auto p-1 rounded-t-lg"></div>
            <div class="relative pb-5 px-2 shadow-xl ring-1 ring-gray-900/5 mx-auto max-w-lg rounded-lg">
                <!-- replace below with v-if -->
                <div class="mx-auto max-w-md">
                    <div class="flex flex-row justify-center pt-4 pl-5 pr-2">
                        <p class="font-notoSansThai text-gray-800 font-bold whitespace-pre-line mr-auto pr-4" >{{ name.replace(" (","\n(") }}</p>
                        <!-- <p class="font-notoSansThai text-gray-800 font-bold ml-5" v-html="name"></p> -->
                        <div class="relative ">
                            <div :class="setColor()" class="flex w-full my-auto items-center justify-center py-1.5 px-5 rounded-lg">
                                <!-- score here -->
                                <p class="font-notoSansThai text-white">{{ setScoreString(score) }}</p>
                            </div>
                        </div>
                    </div>
                    <hr class="border-t-1 px-7 mt-3 border-gray-300 w-11/12 mx-auto">
                    <div class="w-auto pl-5 pr-5 pt-4 pb-2">
                        <!-- intro here -->
                        <p class="font-notoSansThai text-[13px] text-gray-600 w-full">
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
        <div class="relative drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] 
                ring-1 ring-gray-900/5 mx-auto max-w-lg rounded-lg w-80 bg-white">
            <div :class="setColor()" class="w-full h-auto p-1 rounded-t-lg"></div>
            <div class="relative pb-5 px-2 shadow-xl ring-1 ring-gray-900/5 mx-auto max-w-lg rounded-lg">
                <!-- replace below with v-if -->
                <div class="mx-auto max-w-md">
                    <div class="flex flex-row justify-center gap-12 pt-4 pl-5 pr-2">
                        <p class="font-notoSansThai text-gray-800 font-bold mr-auto" v-html="name"></p>
                        <div class="relative ">
                            <div :class="setColor()" class="flex w-full my-auto items-center justify-center py-1.5 px-5 rounded-lg">
                                <!-- score here -->
                                <p class="font-notoSansThai text-white">{{ setScoreString(score) }}</p>
                            </div>
                        </div>
                    </div>
                    <hr class="border-t-1 px-7 mt-3 border-gray-300 w-11/12 mx-auto">
                    <div class="w-auto pl-5 pr-2 pt-5 pb-2">
                        <!-- intro here -->
                        <div v-for="item in groupListScore.sort((a, b) => b.score - a.score)" class="flex flex-row">
                            <p class="font-notoSansThai text-very_small text-gray-600 text-left mr-auto break-normal"> {{ item.name }}</p>
                            <p class="font-notoSansThai text-very_small text-gray-600 ml-auto mt-0.5">
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
    name: { type: String, required: false, default: '' },
    score: { type: Number, required: true, default: 0 },
    intro: { type: String, required: false, default: '' },
    groupList: { type: Boolean, required: false, default: false },
    paddingBottom: { type: String, default: '0.5rem' },
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
    if (score < 6.6) return backgroundColor = 'bg-dcv-low';
    if (score >= 6.6 && score < 9)  return backgroundColor = 'bg-dcv-med';
    if (score >= 9) return backgroundColor = 'bg-dcv-high';
    return backgroundColor;
}
</script>

<style scoped>
.padding-b {
    padding-bottom: v-bind("props.paddingBottom");
}
</style>