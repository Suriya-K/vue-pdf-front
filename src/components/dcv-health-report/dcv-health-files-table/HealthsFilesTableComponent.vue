<template>
    <PaginationComponent :items=data :items-per-page=10></PaginationComponent>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import PaginationComponent from './PaginationComponent.vue';

let data = ref(<any>[]);

async function getDcvLists() {
    const data = await axios.get(import.meta.env.VITE_PDF_SERVICE + "dcv/healths/get/lists", { withCredentials: true })
        .then(response => {
            console.log('get lists',response.data)
            return response.data
        })
    return data;
}

onBeforeMount(async () => {
    let dcvLists = await getDcvLists();
    let dcvArray: any = [];
    for (let i = 0; i < dcvLists.length; i++) {
        console.log(dcvLists[i])
    }
    // for (let key in dcvLists) {
    //     dcvArray.push(key.name);
    // }
    data.value = dcvArray;
})

</script>