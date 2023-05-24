<template>
    <NavbarComponent></NavbarComponent>
    <UploadCardComponent></UploadCardComponent>
</template>

<script lang="ts">
import NavbarComponent from'../navigation/NavbarComponent.vue'
import UploadCardComponent from '../upload-data/UploadCardComponent.vue';

export default {
    name: "Home",
    components: { NavbarComponent,UploadCardComponent }
}
</script>