<template>
    <div class="custom-page-size-a4">
        <div :class="['w-full h-full bg-no-repeat bg-cover m-0', background]">
            
            





            <!-- start here -->
  <div class="relative drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] ring-1 ring-gray-900/5 mx-auto rounded-lg w-[684px] bg-red-400">
  <!-- replace below with v-if -->
    <div class="mx-2"> 
            <div class="grid grid-cols-10 w-auto  ">
              <!-- intro here -->
                <p class="font-notoSansThai text-[13px] text-gray-600 text-justify  col-span-2 px-4 font-bold"> โรคหลอดเลือดสมอง (Stroke) </p>
                <p class="font-notoSansThai text-[13px] text-gray-600 text-right  col-span-1 px-4"> 9.99</p>
                <p class="font-notoSansThai text-[13px] text-gray-600 text-justify  col-span-3 px-4">	• ตรวจเช็คร่างกาย โดยเฉพาะ ความดันโลหิต ระดับน้ำตาล และไขมันในเลือด เนื่องจากเป็นปัจจัยสำคัญในการเกิดโรค </p>
                <p class="font-notoSansThai text-[13px] text-gray-600 text-justify  col-span-4 px-4"> • ออกกำลังกายสม่ำเสมอ เน้นระดับความเข้มข้นปานกลาง (zone 2-3) ระยะเวลาไม่ต่ำกว่า 30 นาที อย่างน้อย 150 นาทีต่อสัปดาห์ เพื่อส่งเสริมการทำงานของหัวใจ และทำให้ร่างกายใช้พลังงานไขมันและน้ำตาลได้ดี  </p>
                
            </div>
      </div>
  </div>

            
            <RecommandCardComponet :header-state="`url(${headerState.low})`"></RecommandCardComponet>
        </div>
    </div>
</template>

<script setup lang="ts">
import RecommandCardComponet from './cards/RecommandCardComponet.vue';
const props = defineProps({
    background: { type: String }
})
const headerState = {
    high: '/src/assets/img/dcv-report/large-box/large-box-header-high.png',
    med: '/src/assets/img/dcv-report/large-box/large-box-header-med.png',
    low: '/src/assets/img/dcv-report/large-box/large-box-header-low.png',

}
</script>