<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0 pt-[11.5rem]', background]">
            <div class="relative" v-for="(item) in data">
                <RecommandCardComponet class="padd" :group-name="findGroupName(item.group)" :list="item.data"></RecommandCardComponet>
            </div>
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
        name: 'กลุ่มโรคปอดและท้อง',
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
    console.log(data.value);
})

function findGroupName(groupCode: any) {
    const filteredObjects = groupName.value.find(obj => {
        if(obj.group === groupCode) return obj.name
    });
    return filteredObjects?.name
}
</script>