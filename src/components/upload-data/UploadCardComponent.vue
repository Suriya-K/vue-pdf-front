<template>
    <div class="card w-96 bg-slate-900 m-auto">
        <div class="card-body">
            <h2 class="card-title text-white">Upload File Here</h2>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text text-white">Pick a file</span>
                </label>
                <input type="file" class="file-input file-input-bordered w-full max-w-xs text-white"
                    @change="onChange($event)" />
                <span class="text-red-600 font-bold" v-if="!file_data && isEmpty">file cannot be empty</span>
                <label class="label">
                    <span class="label-text text-white">Report : </span>
                </label>
                <select class="select select-bordered w-full max-w-xs text-white" v-model="selected_report"
                    :required="true">
                    <option class="text-white" v-for="option in report_type" :value="option.value"
                        :disabled="option.disabled">
                        {{ option.text }}
                    </option>
                </select>
                <span class="text-red-600 font-bold" v-if="!selected_report && isEmpty">please select report type</span>
                <div class="card-actions pt-4">
                    <button class="btn btn-primary m-auto" @click="onSubmit">Generate PDF</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// import axios from 'axios';


const router = useRouter();

// @ts-ignore
let file_data: any;
let selected_report: string = '';
let isEmpty = ref(false);

const report_type = [
    { text: "Report Type", value: "", disabled: true },
    { text: "Test Report", value: "test_report", disabled: false },
    { text: "DCV Health Report", value: "dcv_table", disabled: false }];

function onChange(event: any) {
    if (!event.target.files) return;
    file_data = event.target.files[0];
}

async function onSubmit() {
    if (!file_data) {
        isEmpty.value = true;
        console.log(isEmpty.value)
        return
    }

    const formData = new FormData();

    try {
        formData.append('csv', file_data);
        formData.append('selectedReport', selected_report);
        await axios.post(import.meta.env.VITE_PDF_SERVICE+'dcv-upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        router.push({ name: selected_report });
    } catch (err) {
        console.log(err);
    }
    // const routeData = this.$router.resolve({ name: this.selected_report });
    // window.open(routeData.href, '_blank');
}
</script>