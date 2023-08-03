<template>
    <NavbarComponent></NavbarComponent>
    <div class="container mx-auto">
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">
import NavbarComponent from './components/navigation/NavbarComponent.vue';
</script>