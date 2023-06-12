<template>
    <div class="flex flex-row flex-wrap pl-11 pt-1 h-full ">
        <p class="font-notoSansThai text-gray-600 font-bold mr-auto pl-8 pt-1">{{ groupName }}</p>
        <div class="grid grid-rows-[auto,1fr,auto] w-[44rem] pt-[0.3rem] pb-2">
            <!-- start here -->
            <div class="drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] ring-1 ring-gray-900/5 mx-auto rounded-lg w-full bg-white">
                <div class="bg-dcv-high w-full h-auto p-1 rounded-t-lg"></div>
                <div class="pt-5 pb-5 pl-2 shadow-xl ring-1 ring-gray-900/5 mx-auto  rounded-lg">
                    <div v-for="(item, index) in list">
                        <div class="grid grid-cols-10 w-auto">
                            <p class="font-notoSansThai text-[10px] text-gray-600 text-left col-span-2 px-4 font-bold whitespace-pre-line"> {{ item.name.replace(" (","\n(") }} </p>
                            <p class="font-notoSansThai text-[10px] text-gray-600 text-right  col-span-1 px-4">{{ setScoreString(item.score) }}</p>
                            <p class="font-notoSansThai text-[10px] text-gray-600 text-left  col-span-3 px-4 whitespace-pre-line" v-if="item.checkup">{{ item.checkup.replace(" •","\n•") }}</p>
                            <p class="font-notoSansThai text-[10px] text-gray-600 text-left  col-span-3 px-4" v-if="!item.checkup">รับการตรวจตามปรกติ</p>
                            <div class="font-notoSansThai text-[10px] text-gray-600 text-left col-span-4 pl-2 pr-7 flex-col whitespace-pre-line">
                                <p class="">{{ item.risk_reduction.replace(" •","\n•")  }}</p>
                                <p class="text-gray-600 font-bold" v-if="item.supplement">อาหารเสริมที่แนะนำ: </p>
                                <!-- add new item -->
                                <p class="">{{ item.supplement }}</p>
                            </div>
                        </div>
                        <hr class="border-t-1 ml-5 my-3 border-gray-300 w-[40rem] " v-if="isNotLastIndex(index)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    groupName: { type: String, default: 'กลุ่มโรคสมอง' },
    list: {
        type: Array<any>, default: [
            {
                name: 'โรคหลอดเลือดสมอง <br> (Stroke)',
                score: 10.00,
                checkup: 'ตรวจเช็คร่างกาย โดยเฉพาะ ความดันโลหิต ระดับน้ำตาล และไขมันในเลือด เนื่องจากเป็นปัจจัยสำคัญในการเกิดโรค',
                risk_reduction: 'ออกกำลังกายสม่ำเสมอ เน้นระดับความเข้มข้นปานกลาง (zone 2-3) ระยะเวลาไม่ต่ำกว่า 30 นาที อย่างน้อย 150 นาทีต่อสัปดาห์ เพื่อส่งเสริมการทำงานของหัวใจ และทำให้ร่างกายใช้พลังงานไขมันและน้ำตาลได้ดี ',
                supplement: 'กินแกลบจ้า'
            },
            {
                name: 'โรคหลอดเลือดสมอง <br> (Stroke)',
                score: 10.00,
                checkup: 'ตรวจเช็คร่างกาย โดยเฉพาะ ความดันโลหิต ระดับน้ำตาล และไขมันในเลือด เนื่องจากเป็นปัจจัยสำคัญในการเกิดโรค',
                risk_reduction: 'ออกกำลังกายสม่ำเสมอ เน้นระดับความเข้มข้นปานกลาง (zone 2-3) ระยะเวลาไม่ต่ำกว่า 30 นาที อย่างน้อย 150 นาทีต่อสัปดาห์ เพื่อส่งเสริมการทำงานของหัวใจ และทำให้ร่างกายใช้พลังงานไขมันและน้ำตาลได้ดี ',
                supplement: 'กินแกลบจ้า'
            },
        ]
    },
})

function isNotLastIndex(index: number): boolean {
    return index !== props.list.length - 1;
}

function setScoreString(score: number): string {
    return score.toFixed(2).toString();
}
</script>

<style scoped>

</style>