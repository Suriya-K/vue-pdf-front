<template>
    <PaginationComponent :items=data :items-per-page=10></PaginationComponent>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import PaginationComponent from './PaginationComponent.vue';

let data = ref([]);

async function getDcvLists() {
    const { data: response } = await axios.get("http://localhost:3333/test")
    return response.data;
}

onBeforeMount(async () => {
    const dcvLists = await getDcvLists();
    data.value = dcvLists;
})

</script>