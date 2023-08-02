<template>
    <div class="container mx-auto flex flex-col space-y-5 pb-6 print:space-y-0 print:pb-0 " ref="dcvReport">
        <HealthRiskReport :sample_number="sample_number" :group-score="getGroupScoreByName()" background="bg-dcv-hr-report"
            :sample-data-highest-score="getHighestScore()" />
        <GroupHealthRisk background="bg-dcv-hr-group" :group-sample="groupData" />
        <div v-for="(item, index) in chunks">
            <HealthRiskRecommend :pageNumber="pageNumber + index" :recommand-data="item" background="bg-dcv-hr-rec">
            </HealthRiskRecommend>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, ref } from 'vue';
import GroupHealthRisk from './GroupHealthRisk.vue';
import HealthRiskRecommend from './HealthRiskRecommend.vue';
import HealthRiskReport from './HealthRiskReport.vue';
import axios from 'axios';

const props = defineProps({
    id: { type: String, required: true },
    sample_number: { type: String, required: true },
    is_print: { type: Number, required: true }
})

// change type later
const sampleData = ref<any>([]);
const groupData = ref<any>([]);
const transformedArray = ref<any>([]);
const chunks = ref<any>([]);
const pageNumber: number = 3;

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

const isMounted = ref(false);

onBeforeMount(async () => {
    if (isMounted.value) return;
    if (!props.sample_number) return

    try {
        const sample = await axios.get(import.meta.env.VITE_PDF_SERVICE + "dcv/healths/get/" + props.sample_number + '/' + props.id, { withCredentials: true })
            .then(response => {
                console.log(response.data)
                return response.data
            })
        sampleData.value = extractAndGroupSample(sample);
        groupData.value = await getSampleGroup();
        const groupedData = getGroupScoreGreatherThanSix(); // Get the grouped data using your existing function
        transformedArray.value = transformGroupedDataToArray(groupedData);
        calculatedRecommendPage();
        isMounted.value = true;
    } catch (error) {
        console.error("Error fetching data:", error);
    }

})

// Clear value to prevent memory leaks
onBeforeUnmount(() => {
    sampleData.value = null;
    groupData.value = null;
    transformedArray.value = null;
    chunks.value = null;
})

const delay_print = () => {
    window.print()
    window.close()
}

onMounted(() => {
    if (props.is_print == 1) {
        document.title = "SAMPLE_" + props.sample_number
        setTimeout(delay_print, 500)
    }
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
    const remove_no_intro_sample = sampleData.value.filter((data: any) => {
        if (data == undefined) return
        if (!data.intro) return
        return data
    })
    remove_no_intro_sample.sort((a: any, b: any) => b.disease_score - a.disease_score);
    const topThree = remove_no_intro_sample.slice(0, 3);
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

    if (groupName.value && groupName.value.length > 0) {
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
    }

    // console.log(groupedData);
    return groupedData;
}

function getGroupScoreGreatherThanSix() {
    const groupedData: Record<string, any[]> = {};

    if (groupName.value && groupName.value.length > 0) {
        groupName.value.forEach((element: any) => {
            if (element === undefined) return;

            const group = groupData.value[element.group];
            if (!groupedData[element.group]) {
                groupedData[element.group] = [];
            }

            group.forEach((sample: any) => {
                if (sample.disease_score > 6) {
                    groupedData[element.group].push({
                        name: sample.risk_disease,
                        score: sample.disease_score,
                        checkup: sample.checkup,
                        risk_reduction: sample.risk_reduction,
                        supplement: sample.supplement
                    });
                }
            });
        });
    }

    // Remove Empty Group
    Object.keys(groupedData).forEach((key) => {
        if (groupedData[key].length === 0) {
            delete groupedData[key];
        }
    });
    return groupedData;
}

function transformGroupedDataToArray(groupedData: Record<string, any[]>): any[] {
    const result: any[] = [];

    for (const groupKey in groupedData) {
        if (groupedData.hasOwnProperty(groupKey)) {
            const group = groupedData[groupKey];
            result.push({
                group: groupKey,
                data: group,
            });
        }
    }
    // console.log("trasefawdawweage");
    // console.log(result);
    return result;
}

function calculatedRecommendPage() {
    const chunkSize = 6;
    const transformedArrayValue = transformedArray.value;
    // console.log("check");
    // console.log(transformedArrayValue);

    var chuckList: any[] = [];
    const pageList: any[] = [];
    let counter = 0;
    let special_flag: boolean = false;
    // const chunks: DcvHealthLists[][] = [];
    for (let i = 0; i < transformedArrayValue.length; i += 1) {
        const length = transformedArrayValue[i].data.length;
        let last = 0;
        let completeFlag = false
        while (!completeFlag) {
            if (counter + length - last < chunkSize) {
                const slicedList = transformedArrayValue[i].data.slice(last, length);
                chuckList.push({ ...transformedArrayValue[i], data: slicedList });
                completeFlag = true
                counter = (counter + length - last) % chunkSize
            } else if (counter + length >= chunkSize) {
                const slicedList = transformedArrayValue[i].data.slice(0, chunkSize - counter);// = length-(counter+length-chunkSize)
                chuckList.push({ ...transformedArrayValue[i], data: slicedList });
                if (chunkSize - counter == length) {
                    completeFlag = true
                }
                last = chunkSize - counter
                counter = (counter + chunkSize - counter) % chunkSize
            }
            // console.log("subchunki chunki chunky");
            // console.log(chuckList);
            if (counter == 0) {
                pageList.push(chuckList)
                chuckList = [];
            }
        }
        if (!special_flag) {
            special_flag = transformedArrayValue[i].data.find((element: any) => {
                const risk_count = findSpecialCharacter(element.risk_reduction)
                const checkup_count = findSpecialCharacter(element.checkup)
                if (risk_count >= 2 || checkup_count >= 2) {
                    counter += 1
                    return true
                }
            });
        }
    }
    if (counter != 0) {
        pageList.push(chuckList)
        chuckList = [];
    }
    chunks.value = pageList;
    // console.log("chunki chunki chunky");
    // console.log(chunks.value);





    //     // const chunks: DcvHealthLists[][] = [];
    //     for (let i = 0; i < transformedArrayValue.length; i += chunkSize) {
    //         const sliceChunks = transformedArrayValue.slice(i, i + chunkSize);
    //         chuckList.push(sliceChunks);
    //         // Perform further operations on the chunk as needed
    //     }
    //     chunks.value = chuckList;
    //     console.log("chunki chunki chunky");
    //     console.log(chunks.value);
    //     // for (let i = 0; i < transformedArrayValue.length; i += chunkSize) {
    //     //     console.log(transformedArray.value[i]);
    //     //     // const chunk = transformedArray[i].data[i].slice(i, i + chunkSize);
    //     //     // chunks.value.push(chunk);
    //     // }
}

function findSpecialCharacter(str: string, specialChar: string = "•"): number {
    const regex = new RegExp(specialChar, 'g');
    const matches = str.match(regex);

    return matches ? matches.length : 0;
}

</script>