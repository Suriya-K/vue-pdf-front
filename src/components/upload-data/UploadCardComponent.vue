<template>
    <div class="card w-96 glass m-auto">
        <div class="card-body">
            <h2 class="card-title">Upload File Here</h2>
            <div class="form-control w-full max-w-xs">
                <label class="label">
                    <span class="label-text">Pick a file</span>
                </label>
                <input type="file" class="file-input file-input-bordered w-full max-w-xs" @change="onChange($event)" />
                <label class="label">
                    <span class="label-text">Report : </span>
                </label>
                <select class="select select-bordered w-full max-w-xs" v-model="selected_report" :required="true">
                    <option v-for="option in report_type" :value="option.value" :disabled="option.disabled">
                        {{ option.text }}
                    </option>
                </select>
                <div class="card-actions pt-4">
                    <button class="btn btn-primary m-auto" @click="onSubmit">Generate PDF</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

let file_data: any;
export default defineComponent({
    name: "UploadCardComponent",
    data() {
        return {
            report_type: [
                { text: "Report Type", value: "", disabled: true },
                { text: "Test Report", value: "test_report", disabled: false },
                { text: "DCV Health Report", value: "dcv_table", disabled: false }
            ],
            selected_report: '',
        }
    },
    methods: {
        onChange(event: any) {
            if (!event.target.files) return;
            file_data = event.target.files[0];
        },
        async onSubmit() {
            // if (!file_data) return;

            const formData = new FormData();

            // try {
            //     formData.append('uploadData', file_data);
            //     formData.append('selectedReport', this.selected_report);
            //     await axios.post('http://localhost:3000/test/upload', formData, {
            //         headers: {
            //             'Content-Type': 'multipart/form-data'
            //         }
            //     })
            // } catch (err) {
            //     console.log(err);
            // }
            // const routeData = this.$router.resolve({ name: this.selected_report });
            this.$router.push({name:this.selected_report});
            // window.open(routeData.href, '_blank');
        }
    }
})
</script>