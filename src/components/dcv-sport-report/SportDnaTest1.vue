<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', props.background]">
            <div class="pl-14 pt-36 flex flex-row gap-4">
                <p>LOGO</p>
                <div>
                    <h1>INJURIES</h1>
                    <p>การบาดเจ็บมีปัจจัยเสี่ยงที่สำคัญคือ การออกกำลังกายไม่ถูกวิธี หรือไม่เหมาะสมกับสภาพร่างกาย
                        อีกทั้งปัจจัยทางพันธุกรรมยังส่งผลต่อระดับความเสี่ยงในการบาดเจ็บอีกด้วย การบาดเจ็บที่พบบ่อย ได้แก่
                    </p>
                </div>
            </div>
            <div class="pt-4 flex flex-col gap-4">
                <SportInjuriesCard></SportInjuriesCard>
                <div class="flex flex-row gap-4 box-border bg-sport-box">
                    <h3>supplement: </h3>
                    <p>"Glucosamine + MSM + Vitamin C + K2 + Vitamin D3 Antioxidants or Anti-inflammation "</p>
                </div>
            </div>
            <div class="pl-14 pt-10">
                <div class="flex flex-row gap-4">
                    <p>LOGO</p>
                    <div>
                        <h1>RECOVERY CAPACITY</h1>
                        <p>ความสามารถที่ร่างกายจะกลับสู่สภาวะปกติหลังจากการออกกำลังกาย ซึ่งขึ้นอยู่กับ 2 ปัจจัยหลัก ได้เเก่
                        </p>
                    </div>
                </div>
                <div class="flex flex-row">
                    <div class="basis-1/2">
                        <h1>Recovery efficiency</h1>
                        <p>ประสิทธิภาพในการฟื้นตัวหลังออกกำลังกาย สังเกตจากการกลับสู่สภาวะปกติ
                            ของอัตราชีพจร อัตราการหายใจ รวมถึงอุณหภูมิร่างกาย ทุกคนจะมีระยะเวลา
                            ฟื้นตัวเเตกต่างกันเนื่องจากระบบภูมิคุ้มกันเเละการตอบสนองต่อฮอร์โมนที่
                            ต่างกัน หากร่างกายมีการพักฟื้นไม่เพียงพอก็อาจทำให้เกิดการบาดเจ็บได้
                        </p>
                    </div>
                    <div class="basis-1/2">
                        <h1>Lactate clearance</h1>
                        <p>กรดแลคติก ถูกสร้างขึ้นในกล้ามเนื้อระหว่างการออกกำลังกาย โดยปกติ
                            ร่างกายจะมีการกำจัดกรดเเลคติดเพื่อให้อยู่ในสมดุล เมื่อมีการสร้างกรด
                            แลคติกที่มากเกินไป อาจทำให้ร่างกายกำจัดกรดแลคติกไม่ทัน ทำให้เกิด
                            การคั่งอยู่ในกระแสเลือด ส่งผลให้กล้ามเนื้อเกิดการเมื่อยล้า
                        </p>
                    </div>
                </div>
                <div class="flex flex-row gap-1">
                    <div class="flex flex-col gap-2 h-full w-96">
                        <div class="flex flex-row">
                            <p>IMAGE</p>
                            <p>ระดับต่ำ</p>
                        </div>
                        <div class="box-border bg-sport-yellow-2">
                            <h2>คำแนะนำสำหรับคุณ</h2>
                            <p>Your recovery time = 24-36 hrs.</p>
                        </div>
                        <div class="box-border bg-sport-box">
                            <h2> supplement :</h2>
                            <p>Your recovery time = 24-36 hrs.</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 h-full w-96">
                        <div class="flex flex-row">
                            <p>IMAGE</p>
                            <p>ระดับต่ำ</p>
                        </div>
                        <div class="box-border bg-sport-yellow-2">
                            <h2>คำแนะนำสำหรับคุณ</h2>
                            <p>Your recovery time = 24-36 hrs.</p>
                        </div>
                        <div class="box-border bg-sport-box">
                            <h2> supplement :</h2>
                            <p>Your recovery time = 24-36 hrs.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SportInjuriesCard from './cards/SportInjuriesCard.vue';

const props = defineProps({
    background: String,
})
</script>