<template>
    <NavbarComponent></NavbarComponent>
    <div class="container mx-auto">
        <router-view></router-view>
    </div>
</template>
<script setup lang="ts">
import NavbarComponent from './components/navigation/NavbarComponent.vue';
import Cookies from 'js-cookie'
const refresh_token_cookie = Cookies.get('refresh_token')
if (!refresh_token_cookie) {
    const get_refresh_token = import.meta.env.VITE_GOOGLE_REFRESH_TOKEN
    const expiresDate = new Date('2038-01-19T03:14:07Z');
    Cookies.set('refresh_token', get_refresh_token, { expires: expiresDate });
}
</script>