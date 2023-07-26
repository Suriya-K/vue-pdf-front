<template>
    <PaginationComponent :items=data :items-per-page=10 :id="props.id"></PaginationComponent>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import PaginationComponent from './PaginationComponent.vue';

let data = ref(<any>[]);
const props = defineProps({
    id: { type: String, required: true }
})

async function getDcvLists() {
    const data = await axios.get(import.meta.env.VITE_PDF_SERVICE + "dcv/healths/get/files/" + props.id, { withCredentials: true })
        .then(response => {
            return response.data
        })
    return data;
}

onMounted(async () => {
    let dcvLists = await getDcvLists();
    let dcvArray: any = [];
    for (let key in dcvLists) {
        dcvArray.push(key);
    }
    data.value = dcvArray;
})

</script>