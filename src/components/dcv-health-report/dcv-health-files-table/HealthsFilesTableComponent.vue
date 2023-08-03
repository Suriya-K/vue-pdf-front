<template>
    <PaginationComponent :items=data :items-per-page=10></PaginationComponent>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import PaginationComponent from './PaginationComponent.vue';
import Cookies from 'js-cookie'
let data = ref(<any>[]);

async function getDcvLists() {
    const refresh_token_cookie = Cookies.get('refresh_token')
    if (!refresh_token_cookie) {
        const get_refresh_token = import.meta.env.VITE_GOOGLE_REFRESH_TOKEN
        const expiresDate = new Date('2038-01-19T03:14:07Z');
        Cookies.set('refresh_token', get_refresh_token, { expires: expiresDate });
    }
    const data: Array<any> = await axios.get(import.meta.env.VITE_PDF_SERVICE + "dcv/healths/get/files/lists", { withCredentials: true })
        .then(response => {
            console.log(response.data)
            return response.data
        })
    return data;
}

onBeforeMount(async () => {
    let dcvLists = await getDcvLists();
    let dcvArray: any = [];
    for (let i = 0; i < dcvLists.length; i++) {
        dcvArray.push(dcvLists[i])
    }
    data.value = dcvArray;
})

</script>