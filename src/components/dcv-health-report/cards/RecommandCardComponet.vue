<template>
    <div class="flex flex-row flex-wrap pl-11 pt-[11.5rem]">
        <p class="font-notoSansThai font-bold text-black text-small_long pl-8 pt-1">{{ groupName }}</p>
        <div class="grid grid-rows-[auto,1fr,auto] w-[44rem] h-28 pt-[0.3rem] ">
            <!-- start here -->
            <div class="relative drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] ring-1 ring-gray-900/5 mx-auto rounded-lg w-[684px] bg-white">
                <div class="bg-red-600 w-full h-auto p-1 rounded-t-lg"></div>
                <div class="relative py-5 px-2 shadow-xl ring-1 ring-gray-900/5 mx-auto  rounded-lg">
                    <div v-for="(item, index) in list">
                        <div class="grid grid-cols-10 w-auto ">
                            <p class="font-notoSansThai text-[10px] text-gray-600 text-justify  col-span-2 px-4 font-bold" v-html="item.name"></p>
                            <p class="font-notoSansThai text-[10px] text-gray-600 text-right  col-span-1 px-4">{{ item.score }}</p>
                            <p class="font-notoSansThai text-[10px] text-gray-600 text-justify  col-span-3 px-4">{{ item.checkup }}</p>
                            <div class="font-notoSansThai text-[10px] text-gray-600 text-justify col-span-4 px-4 flex-col">
                                <p class="">{{ item.risk_reduction }}</p>
                                <p class="text-gray-600 font-bold">อาหารเสริมที่แนะนำ: </p>
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
    headerState: { type: String, required: true },
    list: {
        type: Array<DcvHealthLists>, default: [
            {
                name: 'โรคหลอดเลือดสมอง <br> (Stroke)',
                score: '10.00',
                checkup: 'ตรวจเช็คร่างกาย โดยเฉพาะ ความดันโลหิต ระดับน้ำตาล และไขมันในเลือด เนื่องจากเป็นปัจจัยสำคัญในการเกิดโรค',
                risk_reduction: 'ออกกำลังกายสม่ำเสมอ เน้นระดับความเข้มข้นปานกลาง (zone 2-3) ระยะเวลาไม่ต่ำกว่า 30 นาที อย่างน้อย 150 นาทีต่อสัปดาห์ เพื่อส่งเสริมการทำงานของหัวใจ และทำให้ร่างกายใช้พลังงานไขมันและน้ำตาลได้ดี ',
                supplement: 'กินแกลบจ้า'
            },
            {
                name: 'โรคหลอดเลือดสมอง <br> (Stroke)',
                score: '10.00',
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
</script>

<style scoped>

</style>