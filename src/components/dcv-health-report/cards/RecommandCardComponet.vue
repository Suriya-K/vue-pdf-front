<template>
    <div class="flex flex-row flex-wrap pl-11 pt-[11.5rem]">
        <p class="font-notoSansThai font-bold text-black text-small_long pl-8 pt-1">{{ groupName }}</p>
        <div class="grid grid-rows-[auto,1fr,auto] w-[44rem] h-28 pt-[0.3rem] pl-2">
            <header class="background-header bg-cover bg-no-repeat w-[44.4rem] h-[0.4rem]"></header>
            <main class="background-body bg-no-repeat bg-cover flex flex-col w-full">
                <div v-for="(item, index) in groupList">
                    <div class="background-body bg-no-repeat bg-cover flex flex-row pt-2">
                        <div class="pl-5 flex-initial w-64">
                            <p class="font-notoSansThai text-very_small" v-html="item.name"></p>
                        </div>
                        <div class="pl-20 flex-initial w-[18rem] ">
                            <p class="font-notoSansThai text-very_small">
                                {{ item.score }}
                            </p>
                        </div>
                        <div class="">
                            <p class="font-notoSansThai text-very_small">
                                {{ item.checkup }}
                            </p>
                        </div>
                        <div class="pl-14 pr-9">
                            <p class="font-notoSansThai text-very_small">
                                {{ item.risk_reduction }}
                            </p>
                        </div>
                    </div>
                    <hr class="border-t-1 ml-5 mt-5 border-gray-300 w-[40rem] pb-2" v-if="isNotLastIndex(index)">
                </div>
            </main>
            <footer class="background-footer bg-cover bg-no-repeat w-full h-5"></footer>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    groupName: { type: String, default: 'กลุ่มโรคสมอง' },
    headerState: { type: String, required: true },
    groupList: {
        type: Array<GroupNameList>, default: [
            {
                name: 'โรคหลอดเลือดสมอง <br> (Stroke)',
                score: '10.00',
                checkup: 'ตรวจเช็คร่างกาย โดยเฉพาะ ความดันโลหิต ระดับน้ำตาล และไขมันในเลือด เนื่องจากเป็นปัจจัยสำคัญในการเกิดโรค',
                risk_reduction: 'ออกกำลังกายสม่ำเสมอ เน้นระดับความเข้มข้นปานกลาง (zone 2-3) ระยะเวลาไม่ต่ำกว่า 30 นาที อย่างน้อย 150 นาทีต่อสัปดาห์ เพื่อส่งเสริมการทำงานของหัวใจ และทำให้ร่างกายใช้พลังงานไขมันและน้ำตาลได้ดี '
            },
            {
                name: 'โรคหลอดเลือดสมอง <br> (Stroke)',
                score: '10.00',
                checkup: 'ตรวจเช็คร่างกาย โดยเฉพาะ ความดันโลหิต ระดับน้ำตาล และไขมันในเลือด เนื่องจากเป็นปัจจัยสำคัญในการเกิดโรค',
                risk_reduction: 'ออกกำลังกายสม่ำเสมอ เน้นระดับความเข้มข้นปานกลาง (zone 2-3) ระยะเวลาไม่ต่ำกว่า 30 นาที อย่างน้อย 150 นาทีต่อสัปดาห์ เพื่อส่งเสริมการทำงานของหัวใจ และทำให้ร่างกายใช้พลังงานไขมันและน้ำตาลได้ดี '
            },
        ]
    },
})

function isNotLastIndex(index: number): boolean {
    return index !== props.groupList.length - 1;
}
</script>

<style scoped>
.background-header {
    background-image: v-bind(headerState);
}

.background-body {
    background-image: url('/src/assets/img/dcv-report/large-box/large-box-body.png');
}

.background-footer {
    background-image: url('/src/assets/img/dcv-report/large-box/large-box-footer.png');
}
</style>