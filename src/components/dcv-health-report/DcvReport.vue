<template>
    <div class="container mx-auto flex flex-col space-y-5" ref="dcvReport">
        <HealthRiskReport :group-score="getGroupScoreByName()" background="bg-dcv-hr-report"
            :sample-data-highest-score="getHighestScore()" />
        <GroupHealthRisk background="bg-dcv-hr-group" :group-sample="groupData" />
        <div v-for="item in chunks">
            <HealthRiskRecommend :recommand-data="item" background="bg-dcv-hr-rec"></HealthRiskRecommend>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import GroupHealthRisk from './GroupHealthRisk.vue';
import HealthRiskRecommend from './HealthRiskRecommend.vue';
import HealthRiskReport from './HealthRiskReport.vue';
import axios from 'axios';

const props = defineProps({
    sample_number: { type: String, required: true }
})

// change type later
const sampleData = ref<any>([]);
const groupData = ref<any>([]);
const chunks = ref<DcvHealthLists[][]>([])

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
        group: 'urogenital',
        name: 'กลุ่มโรคทางเดินปัสสาวะและสืบพันธ์ุ',
    },
    {
        group: 'joint',
        name: 'กลุ่มโรคข้อต่อ',
    },
])

onBeforeMount(async () => {
    if (!props.sample_number) return
    const sample = await axios.get("http://localhost:3333/dcv-get/" + props.sample_number)
        .then(response => {
            return response.data
        })
    sampleData.value = extractAndGroupSample(sample);
    groupData.value = await getSampleGroup();
    calculatedRecommendPage();
})

function extractAndGroupSample(sample: any) {
    let combinedSample = []
    for (let i = 0; i < sample.data[props.sample_number].length; i++) {
        const extractSample = sample.data[props.sample_number][i][0]
        combinedSample.push(extractSample);
    }
    return combinedSample
    // console.log(sample.data[props.sample_number]);
}

function getHighestScore() {
    if (!sampleData.value) return
    sampleData.value.sort((a: any, b: any) => b.disease_score - a.disease_score);
    const topThree = sampleData.value.slice(0, 3);
    topThree.forEach((item: any) => {
        item.intro.replace(" ", "");
        item.risk_disease.replace(/(.+)\s(.+)/, "$1\n$2");
    })
    return topThree
}

async function getSampleGroup() {
    const groupedData = await sampleData.value.reduce((result: any, obj: any) => {
        if (obj !== undefined) {
            const key = obj.group;

            if (!result[key]) result[key] = [];
            result[key].push(obj);
        }
        return result;
    }, {});
    return groupedData;
}

function getGroupScoreByName() {
    const groupedData: Record<string, any[]> = {};

    groupName.value.forEach((element: any) => {
        if (element === undefined) return;

        const group = groupData.value[element.group];
        if (!groupedData[element.group]) {
            groupedData[element.group] = [];
        }

        let sum = 0;
        group.forEach((sample: any) => {
            sum += sample.disease_score;
        });

        const averageScore = sum / group.length;
        groupedData[element.group].push({ name: element.name.replace('กลุ่มโรค', ''), score: averageScore });
    });
    console.log(groupedData);
    return groupedData
}




function calculatedRecommendPage() {
    const dcvMockData: DcvHealthLists[] = [];
    const chunkSize = 7;
    // const chunks: DcvHealthLists[][] = [];

    for (let i = 0; i < dcvMockData.length; i += chunkSize) {
        const chunk = dcvMockData.slice(i, i + chunkSize);
        chunks.value.push(chunk);
    }
}

</script>