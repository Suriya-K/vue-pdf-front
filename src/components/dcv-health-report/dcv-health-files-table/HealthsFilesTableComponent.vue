<template>
    <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-50 overflow-hidden bg-gray-700 opacity-50"
        v-if="loading">
        <div class="flex flex-col items-center justify-center pt-64">
            <div
                class="inline-block h-24 w-24 animate-spin rounded-full border-8 border-solid border-r-transparent motion-reduce:animate-[spin_1.5s_linear_infinite]">
            </div>
        </div>
    </div>
    <PaginationComponent :items=data :items-per-page=7></PaginationComponent>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import PaginationComponent from './PaginationComponent.vue';
let data = ref(<any>[]);
let loading = ref(true)

async function getDcvLists() {
    const data: Array<any> = await axios.get(import.meta.env.VITE_PDF_SERVICE + "dcv/healths/get/files/lists", { withCredentials: true })
        .then(response => {
            return response.data
        })
    return data;
}

onBeforeMount(async () => {
    let dcvLists = await getDcvLists();
    let dcvArray: any = [];
    if (dcvLists) loading.value = false
    for (let i = 0; i < dcvLists.length; i++) {
        dcvArray.push(dcvLists[i])
    }
    data.value = dcvArray;
})

</script>