<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 overflow-hidden bg-gray-700 opacity-50"
        v-if="loading">
        <div class="flex flex-col items-center justify-center pt-64">
            <div
                class="inline-block h-24 w-24 animate-spin rounded-full border-8 border-solid border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]">
            </div>
        </div>
    </div>
    <PaginationComponent :items=data :items-per-page=7 :id="props.id"></PaginationComponent>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import PaginationComponent from './PaginationComponent.vue';

let data = ref(<any>[]);
let loading = ref(true);
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
    if (dcvLists) loading.value = false
    for (let key in dcvLists) {
        dcvArray.push(key);
    }
    data.value = dcvArray;
})

</script>