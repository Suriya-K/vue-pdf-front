<template>
    <div class="box-border h-[31.7rem] w-[40.5rem] bg-sport-yellow-1">
        <div class="flex flex-row gap-4">
            <p>LOGO</p>
            <h1 class="text-sport-header">INJURIES</h1>
        </div>
        <div>
            <span>
                การบาดเจ็บมักเกิดจากการกระแทกอย่างรวดเร็วและรุนแรง และการใช้งานส่วนของร่างกายซ้ำๆมากเกินไป
                โดยปัจจัยเสี่ยงที่สำคัญคือ การออกกำลังกายไม่ถูกวิธี หรือไม่เหมาะสมกับสภาพร่างกาย
                อีกทั้งปัจจัยทางพันธุกรรมยังส่งผลต่อระดับความเสี่ยงในการบาดเจ็บอีกด้วย การบาดเจ็บที่พบบ่อย ได้แก่
            </span>
            <p class="pt-2">
                • ระดับความเสี่ยงต่อการได้รับบาดเจ็บจากการออกกำลังกายที่เป็นผลมาจากปัจจัยทางพันธุกรรม
            </p>
        </div>
        <div class="flex flex-row gap-x-48">
            <div class="pl-4 pt-10 flex flex-col gap-y-20">
                <div v-for="item in 2" class="relative w-52 h-20 basis-1/4">
                    <div class="flex flex-row gap-4">
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