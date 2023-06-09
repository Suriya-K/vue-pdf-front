<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', props.background]">
            <div class="flex flex-row flex-wrap pl-12 pt-28">
                <div class="basis-1/2 pt-3">
                    <CardComponent class="w-20 pb-4" :padding-bottom="'0.3rem'" :group-list="true" 
                        :name="diseaseName[1]"
                        :score="diseaseScore[1]" 
                        :group-list-score="getGroupScore('brain')" />
                    <CardComponent class="w-20 pb-4" :padding-bottom="'0.01rem'" :group-list="true" 
                        :name="diseaseName[2]"
                        :score="diseaseScore[2]" 
                        :group-list-score="getGroupScore('eent')" />
                    <CardComponent class="w-20 pb-4" :group-list="true" 
                        :name="diseaseName[3]" 
                        :score="diseaseScore[3]"
                        :group-list-score="getGroupScore('cardiovascular')" />
                    <CardComponent class="w-20" :padding-bottom="'5rem'" :group-list="true" 
                        :name="diseaseName[4]"
                        :score="diseaseScore[4]" 
                        :group-list-score="getGroupScore('chest_abdo')" />
                </div>
                <div class="basis-1/2 pl-1 pt-3">
                    <CardComponent class="w-20 pb-4" :padding-bottom="'15.5rem'" :group-list="true" :name="diseaseName[5]"
                        :score="diseaseScore[5]" :group-list-score="getGroupScore('infectious')" />
                    <CardComponent class="w-20 pb-4" :padding-bottom="'0.3rem'" :group-list="true" :name="diseaseName[6]"
                        :score="diseaseScore[6]" :group-list-score="getGroupScore('urogenital')" />
                    <CardComponent class="w-20 pb-4" :padding-bottom="'0.3rem'" :group-list="true" :name="diseaseName[7]"
                        :score="diseaseScore[7]" :group-list-score="getGroupScore('joint')" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onUpdated, ref } from 'vue';
import CardComponent from './cards/CardComponent.vue';
const props = defineProps({
    background: { type: String },
    groupSample: { type: Object, default: '' }
})

const diseaseName = ref(['EMPTY']);
const diseaseScore = ref([0.00]);

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

function getGroupScore(name: string): any[] {
    let sampleGroup: any[] = [];
    let found = false; // Flag variable to track the exact name match

    groupName.value.forEach((element: any) => {
        if (element === undefined) return;
        if (name === element.group) {
            const group = props.groupSample[name];
            diseaseName.value.push(element.name);
            let sum = 0;

            group.forEach((sample: any) => {
                sum += sample.disease_score;
                sampleGroup.push({
                    name: sample.risk_disease,
                    score: sample.disease_score,
                });
            });

            diseaseScore.value.push(sum / group.length);
            found = true; // Set the flag to true when the exact name match is found
        }

        if (found) {
            return; // Exit the loop if the exact name match has been found
        }
    });

    return sampleGroup;
}

</script>