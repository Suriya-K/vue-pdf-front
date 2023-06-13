<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-contain p-0 pt-[8rem]', background]">
            <div class="relative drop-shadow-[0_4px_4px_rgba(0,0,0,0.2)] 
                ring-1 ring-gray-900/5 mx-auto rounded-lg w-[44rem] bg-dcv-high text-white font-notoSansThai font-semibold leading-4 grid grid-cols-10 pt-2">
                <p class="col-span-3 pl-6 pt-2">โรคที่เสี่ยง</p>
                <p class="col-span-3 pl-5">คำแนะนำ<br>การตรวจเพิ่มเติม</p>
                <p class="col-span-4 pl-3">คำแนะนำ<br>การดูแลสุขภาพ</p>
            </div>
            <div class="relative" v-for="(item) in data">
                <RecommandCardComponet class="padd" :group-name="findGroupName(item.group)" :list="item.data"></RecommandCardComponet>
            </div>
            <p class="font-notoSansThai text-[10px] text-gray-500 pl-14 pt-1"><u class="text-gray-500">หมายเหตุ</u> หากมีข้อสงสัยเพิมเติม ควรปรึกษาทีมแพทย์ของ DNAcanvas เพื่อวางแผนสุขภาพที่ละเอียดมากขึ้น</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onUpdated, ref } from 'vue';
import RecommandCardComponet from './cards/RecommandCardComponet.vue';
const data = ref<any>([]);
const props = defineProps({
    background: { type: String },
    recommandData: { type: Array<[]> }
})
// console.log("testtttt")
// console.log(props.recommandData)

const groupName = ref([
    {
        group: 'brain',
        name: 'กลุ่มโรคสมอง',
    },
    {
        group: 'eent',
        name: 'กลุ่มโรคหูตาคอจมูก',
    },
    {
        group: 'cardiovascular',
        name: 'กลุ่มโรคหัวใจและหลอดเลือด',
    },
    {
        group: 'chest_abdo',
        name: 'กลุ่มโรคปอดและช่องท้อง',
    },
    {
        group: 'infectious',
        name: 'กลุ่มโรคติดเชื้อ',
    },
    {
        group: 'joint',
        name: 'กลุ่มโรคข้อต่อ',
    },
    {
        group: 'urogenital',
        name: 'กลุ่มโรคทางเดินปัสสาวะและสืบพันธ์ุ',
    },
    {
        group: 'joint',
        name: 'กลุ่มโรคข้อต่อ',
    },
])

onUpdated(() => {
    data.value = props.recommandData;
    console.log("DATA VALUE");
    console.log(data.value);
})

function findGroupName(groupCode: any) {
    const filteredObjects = groupName.value.find(obj => {
        if(obj.group === groupCode) return obj.name
    });
    return filteredObjects?.name
}
</script>