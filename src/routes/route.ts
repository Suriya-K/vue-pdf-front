import { createRouter, createWebHistory } from "vue-router";
import DcvReportVue from "../components/dcv-health-report/DcvReport.vue";
import PageViewComponent from "../components/test-report/PageViewComponent.vue";
import Home from "../components/generate-report/Home.vue";

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
      path: "/dcv_report",
      name: "dcv_report",
      component: DcvReportVue,
      props: true,
    },
  ],
});

export default router;
