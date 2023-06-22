<template>
    <PaginationComponent :items=data :items-per-page=10></PaginationComponent>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import PaginationComponent from './PaginationComponent.vue';

let data = ref(<any>[]);

async function getDcvLists() {
    const data = await axios.get(import.meta.env.VITE_PDF_SERVICE + "dcv-get")
        .then(response => {
            return response.data
        })
    return data;
}

onBeforeMount(async () => {
    let dcvLists = await getDcvLists();
    let dcvArray = [];
    for (let key in dcvLists.data) {
        dcvArray.push(key);
    }
    data.value = dcvArray;
})

</script>