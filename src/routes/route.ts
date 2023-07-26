import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/generate-report/Home.vue";
import PageViewComponent from "../components/test-report/PageViewComponent.vue";
import DcvReportVue from "../components/dcv-health-report/DcvReport.vue";
import HealthsFilesTableComponent from "../components/dcv-health-report/dcv-health-files-table/HealthsFilesTableComponent.vue";
import HealthsTableComponent from "../components/dcv-health-report/dcv-health-table/HealthsTableComponent.vue";
import DcvSportReport from "../components/dcv-sport-report/DcvSportReport.vue";

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
      path: "/dcv_report/:sample_number/:id",
      name: "dcv_report",
      component: DcvReportVue,
      props: true,
    },
    {
      path: "/dcv_healths_file_table",
      name: "dcv_healths_file_table",
      component: HealthsFilesTableComponent,
      props: true,
    },
    {
      path: "/dcv_healths_table/:id",
      name: "dcv_healths_table",
      component: HealthsTableComponent,
      props: true,
    },
    {
      path: "/dcv_sports",
      name: "dcv_sports",
      component: DcvSportReport,
    },
  ],
});

export default router;
