<template>
    <div class="box-border h-full bg-sport-yellow-1">
        <div class="pl-16 flex flex-row gap-x-52">
            <div class="pl-4 pt-10 flex flex-col gap-y-20">
                <div v-for="item in 2" class="relative w-52 h-20 basis-1/4">
                    <div class="flex flex-row gap-4">
                        {{ item }}
                        <h1 class="">Ankle</h1>
                        <p>LOGO</p>
                    </div>
                    <p>มีความเสี่ยงระดับต่ำ</p>
                    <div class="flex flex-row gap-4">
                        <div class="box-border bg-sport-yellow-2 h-20">
                            <p>มีคำแนะนำสำหรับคุณ</p>
                        </div>
                        <p>LOGO</p>
                    </div>
                </div>
            </div>
            <div class="pl-4 pt-10 flex flex-col gap-y-20">
                <div v-for="item in 2" class="relative w-52 h-20 basis-1/4">
                    {{ item }}
                    <div class="flex flex-row gap-4 justify-end">
                        <h1>Ankle</h1>
                        <p>LOGO</p>
                    </div>
                    <p class="text-end">มีความเสี่ยงระดับต่ำ</p>
                    <div class="flex flex-row gap-4">
                        <p>LOGO</p>
                        <div class="pl-2 box-border bg-sport-yellow-2 h-20">
                            <p>มีคำแนะนำสำหรับคุณ</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>