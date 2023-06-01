<template>
    <div class="w-96 ml-52">
        <table class="table">
            <!-- head -->
            <thead>
                <tr>
                    <th>#</th>
                    <th>Sample Number</th>
                    <th>Sex</th>
                    <th>Sample Percent</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in displayedItems" :key="index" :item="item">
                    <th>{{ index + 1 }}</th>
                    <th>{{ item.sample?.sample_number }}</th>
                    <th>{{ item.sample?.sex }}</th>
                    <th>{{ item.sample?.sample_perc }}</th>
                    <th>
                        <button class="btn btn-outline btn-success btn-sm mr-2" @click="viewReport(item)">View</button>
                        <button class="btn btn-outline btn-warning btn-sm">Print PDF</button>
                    </th>
                </tr>
            </tbody>
        </table>
        <button type="button" :class="['btn btn-sm mr-0.1', { isActive: page === currentPage }]" v-for="page in pages"
            :key="page" @click="changePage(page)">
            {{ page }}
        </button>
    </div>
</template>

<script lang="ts">
import { ref, computed, watch, toRaw } from 'vue';

export default {
    props: {
        items: {
            type: Array<DcvHealthLists>,
            required: true
        },
        itemsPerPage: {
            type: Number,
            default: 10
        },
    },
    methods: {
        viewReport(report: DcvHealthLists) {
            console.log(toRaw(report));
            const routeData = this.$router.push({ name: 'dcv_report', params: { report: 'fuck' } });
            // window.open(routeData, '_blank');
        }
    },
    setup(props) {
        const currentPage = ref(1);

        const pageCount = computed(() =>
            Math.ceil(props.items.length / props.itemsPerPage)
        );

        const pages = computed(() => {
            return Array.from({ length: pageCount.value }, (_, i) => i + 1);
        });

        const displayedItems = computed(() => {
            const startIndex = (currentPage.value - 1) * props.itemsPerPage;
            const endIndex = startIndex + props.itemsPerPage;
            return props.items.slice(startIndex, endIndex);
        });

        function changePage(pageNumber: number) {
            currentPage.value = pageNumber;
        }

        watch(currentPage, () => {
            //If you want the window to scroll up on page change
            //window.scrollTo({
            //     top: 0,
            //     behavior: 'smooth'
            // });
        });

        return {
            currentPage,
            pageCount,
            pages,
            displayedItems,
            changePage
        };
    }
}
</script>