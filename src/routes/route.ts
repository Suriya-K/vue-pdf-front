import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/generate-report/Home.vue";
import PageViewComponent from '../components/test-report/PageViewComponent.vue'
import DcvReportVue from '../components/dcv-health-report/DcvReport.vue'
import TableComponentVue from '../components/dcv-health-table/TableComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/test_report/",
      name: "test_report",
      component: PageViewComponent,
      props: true,
    },
    {
      path: "/dcv_report/:sample_number",
      name: "dcv_report",
      component: DcvReportVue,
      props: true,
    },
    {
      path: "/dcv_table",
      name: "dcv_table",
      component: TableComponentVue,
      props: true,
    },
  ],
});

export default router;
